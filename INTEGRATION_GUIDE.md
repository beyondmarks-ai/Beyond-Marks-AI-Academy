# Integration Guide - Form Submissions

This guide explains how to set up email and Google Sheets integration for the Demo Booking Modal.

## Option 1: Google Sheets Integration (Recommended - Free)

### Step 1: Create Google Apps Script

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name the columns: `Timestamp`, `Name`, `WhatsApp`, `Email`, `College`, `Course`
4. Go to **Extensions** → **Apps Script**
5. Replace the default code with:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data (works with both JSON and form-urlencoded)
    let data;
    if (e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      // Parse form-urlencoded data
      const params = e.parameter;
      data = {
        name: params.name || '',
        whatsapp: params.whatsapp || '',
        email: params.email || '',
        college: params.college || '',
        course: params.course || '',
        timestamp: params.timestamp || new Date().toISOString()
      };
    }
    
    // Append row to sheet
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name || '',
      data.whatsapp || '',
      data.email || '',
      data.college || '',
      data.course || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 2: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
3. Set:
   - **Description**: "Form Submission Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. Copy the **Web App URL**

### Step 3: Update the Code

In `src/components/DemoBookingModal.jsx`, replace:
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
```
with your actual Web App URL.

---

## Option 2: EmailJS Integration

### Step 1: Install EmailJS

```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an **Email Service** (Gmail, Outlook, etc.)
4. Create an **Email Template** with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{whatsapp}}`
   - `{{college}}`
   - `{{course}}`
5. Get your **Service ID**, **Template ID**, and **Public Key**

### Step 3: Update the Code

1. In `src/components/DemoBookingModal.jsx`, uncomment the EmailJS code
2. Replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`
3. Add the import at the top:
```javascript
import emailjs from '@emailjs/browser';
```

---

## Option 3: Custom Backend API

If you have your own backend server:

1. Create an API endpoint (e.g., `/api/bookings`)
2. Update the fetch URL in `handleSubmit`
3. Handle the form data on your server
4. Send emails or save to database as needed

---

## Testing

After setting up, test the form:
1. Fill out the demo booking form
2. Submit it
3. Check your Google Sheet or email inbox
4. Verify all data is received correctly

---

## Security Notes

- Never commit API keys or credentials to Git
- Use environment variables for sensitive data
- Consider adding rate limiting for production
- Validate data on the server side

