# Google Apps Script Setup - IMPORTANT

## Your Google Apps Script Code MUST be:

```javascript
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get parameters from URL
    const name = e.parameter.name || '';
    const whatsapp = e.parameter.whatsapp || '';
    const email = e.parameter.email || '';
    const college = e.parameter.college || '';
    const course = e.parameter.course || '';
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    
    // Append row to sheet (make sure column order matches!)
    sheet.appendRow([
      timestamp,
      name,
      whatsapp,
      email,
      college,
      course
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Important Steps:

1. **Use `doGet` instead of `doPost`** - The code now uses GET method which is more reliable
2. **Make sure your Google Sheet has these column headers** (in this exact order):
   - Column A: Timestamp
   - Column B: Name
   - Column C: WhatsApp
   - Column D: Email
   - Column E: College
   - Column F: Course

3. **Redeploy your script:**
   - Go to your Apps Script editor
   - Replace the code with the code above
   - Click **Deploy** → **Manage deployments**
   - Click the pencil icon (Edit)
   - Click **New version**
   - Click **Deploy**
   - Make sure "Who has access" is set to **"Anyone"**

4. **Test it:**
   - Fill out the form on your website
   - Submit it
   - Check your Google Sheet - data should appear immediately

## Troubleshooting:

- If data still doesn't appear, check the Apps Script execution log:
  - In Apps Script editor, go to **Executions** (left sidebar)
  - Look for any error messages
  - Fix any errors and redeploy

