import React, { useState, lazy, Suspense } from 'react';

// Lazy load framer-motion to reduce main-thread blocking (heavy library ~157KB)
const MotionDiv = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.div
  }))
);

const AnimatePresenceWrapper = lazy(() => 
  import('framer-motion').then(module => ({
    default: ({ children }) => <module.AnimatePresence>{children}</module.AnimatePresence>
  }))
);
import {
    Palette, Terminal, Globe, Share2, Sparkles,
    Smartphone, Flame, Cloud, Database, ChevronDown, ChevronUp, CheckCircle2,
    Code2, GitBranch, Server, X, ArrowRight, BookOpen, Brain, Monitor, Rocket, Search, Bot, Mic
} from 'lucide-react';
import './Curriculum.css';

const syllabusData = [
    {
        id: 'uiux',
        title: 'UI/UX Design',
        icon: <Palette size={24} />,
        logo: 'https://cdn.simpleicons.org/figma/ff0055',
        color: '#ff0055',
        topics: [
            {
                title: '1. Foundations of UI/UX',
                subtopics: ['What is UX?', 'What is UI?', 'UI vs UX – Deep Understanding']
            },
            {
                title: '2. Design Principles',
                subtopics: ['Color Theory', 'Typography', 'Layout & Composition', 'Interaction Design Principles']
            },
            {
                title: '3. User Research',
                subtopics: ['Understanding Users', 'User Personas', 'User Journey Mapping', 'Research Methods']
            },
            {
                title: '4. Wireframing',
                subtopics: ['Low-Fidelity Wireframing', 'High-Fidelity Wireframes', 'Tools for Wireframing', 'Wireframe Best Practices']
            },
            {
                title: '5. Prototyping',
                subtopics: ['Clickable Prototypes', 'Animation & Motion', 'Micro-Interactions', 'Responsive Prototypes']
            },
            {
                title: '6. Usability Testing',
                subtopics: ['Test Planning', 'Conducting Tests', 'Data Analysis', 'Iteration']
            },
            {
                title: '7. UI Design',
                subtopics: ['Component Design', 'Design Systems', 'Real-World Product UI', 'Branding & Visual Identity']
            },
            {
                title: '8. UX Writing',
                subtopics: ['Principles of UX Writing', 'Writing for Screens', 'Writing for User Emotions']
            },
            {
                title: '9. Accessibility',
                subtopics: ['WCAG Principles', 'Designing for Disabilities', 'Tools']
            },
            {
                title: '10. Full Project Execution',
                subtopics: ['Requirement Gathering', 'User Research', 'Wireframes', 'Prototypes', 'Visual UI Design', 'Usability Testing', 'Final Handoff']
            }
        ]
    },
    {
        id: 'cursor',
        title: 'Cursor — Advanced AI IDE',
        icon: <Terminal size={24} />,
        logo: 'https://cdn.simpleicons.org/cursor/00f0ff',
        color: '#00f0ff',
        topics: [
            {
                title: '1. Introduction to Cursor',
                subtopics: ['What is Cursor?', 'Understanding AI Coding', 'Installing & Setting Up Cursor']
            },
            {
                title: '2. Cursor Interface Deep Breakdown',
                subtopics: ['Editor Panel', 'Sidebar System', 'AI Chat Panel', 'Command Palette']
            },
            {
                title: '3. AI-Assisted Code Generation',
                subtopics: ['Prompt Writing Inside Cursor', 'Generating Code Snippets', 'Writing Full Files with Cursor']
            },
            {
                title: '4. Refactoring & Optimization',
                subtopics: ['Code Refactoring', 'Performance Optimization', 'Code Consistency']
            },
            {
                title: '5. Debugging with Cursor',
                subtopics: ['Understanding Errors', 'AI Debugging Tools', 'Automated Testing Assistance']
            },
            {
                title: '6. Git & Version Control Integration',
                subtopics: ['GitHub Setup', 'Version Control Features', 'AI Code Review']
            },
            {
                title: '7. Full Project Development',
                subtopics: ['Frontend Development Workflow', 'Backend Development Workflow', 'DevOps Tasks']
            },
            {
                title: '8. Cursor Prompt Engineering',
                subtopics: ['Writing Effective Coding Prompts', 'Prompt Templates', 'AI Behavior Control']
            },
            {
                title: '9. Collaboration Tools',
                subtopics: ['Shared Workspaces', 'AI-Assisted Planning', 'Documentation Automation']
            },
            {
                title: '10. Building Real Projects',
                subtopics: ['Portfolio Projects', 'Advanced Projects', 'Deployment']
            }
        ]
    },
    {
        id: 'api',
        title: 'API Development',
        icon: <Globe size={24} />,
        logo: 'https://cdn.simpleicons.org/swagger/7000ff',
        color: '#7000ff',
        topics: [
            { title: '1. API Foundations', subtopics: ['What is an API?', 'Types of APIs', 'API Architecture'] },
            { title: '2. HTTP Essentials', subtopics: ['HTTP Methods', 'HTTP Status Codes', 'Request Structure', 'Response Structure'] },
            { title: '3. Designing REST APIs', subtopics: ['REST Principles', 'CRUD API Design', 'Error Handling', 'API Security Basics'] },
            { title: '4. Authentication & Authorization', subtopics: ['API Keys', 'Token Authentication', 'OAuth 2.0', 'Role-Based Access Control'] },
            { title: '5. API Tools', subtopics: ['Postman', 'Swagger / OpenAPI', 'cURL'] },
            { title: '6. Building APIs', subtopics: ['Routing', 'Controllers', 'Middleware', 'Validating Input'] },
            { title: '7. Database Connections', subtopics: ['SQL Databases', 'NoSQL Databases', 'ORM/ODM Tools'] },
            { title: '8. API Performance', subtopics: ['Caching', 'Pagination', 'Rate Limiting'] },
            { title: '9. API Security', subtopics: ['Common Attacks', 'Secure API Patterns', 'Logging & Monitoring'] },
            { title: '10. Real-World Integrations', subtopics: ['Payment Gateways', 'Social Logins', 'Third-Party APIs'] },
            { title: '11. Deploying APIs', subtopics: ['Hosting Providers', 'CI/CD Integration', 'Scaling APIs'] },
            { title: '12. Building Real Projects', subtopics: ['Beginners', 'Intermediate', 'Advanced'] }
        ]
    },
    {
        id: 'n8n',
        title: 'n8n Automation',
        icon: <Share2 size={24} />,
        logo: 'https://cdn.simpleicons.org/n8n/ff9900',
        color: '#ff9900',
        topics: [
            { title: '1. Introduction to n8n', subtopics: ['What is n8n?', 'Where n8n is used', 'Installing n8n'] },
            { title: '2. Understanding the Interface', subtopics: ['Canvas Overview', 'Node Editor', 'Workflow Settings'] },
            { title: '3. n8n Nodes', subtopics: ['Trigger Nodes', 'Data Nodes', 'Flow Control Nodes', 'API Nodes', 'Integration Nodes', 'AI Nodes'] },
            { title: '4. Working with Data', subtopics: ['Data Structure', 'Expressions', 'Data Transformation'] },
            { title: '5. Building Workflows', subtopics: ['Designing Automation Logic', 'Connecting Nodes', 'Error Handling'] },
            { title: '6. Working with APIs', subtopics: ['HTTP Request Node', 'Authentication Methods', 'Multi-Step API Automation'] },
            { title: '7. Database Automations', subtopics: ['MySQL Node', 'PostgreSQL Node', 'MongoDB Node', 'Google Sheets'] },
            { title: '8. AI Automations', subtopics: ['AI Content Flows', 'Decision-Making with AI', 'Multi-Agent Style Workflows'] },
            { title: '9. Advanced Techniques', subtopics: ['Looping & Iterations', 'Parallel Processes', 'Sub-Workflows'] },
            { title: '10. Deployment & Operations', subtopics: ['Hosting Options', 'Security Setup', 'Workflow Monitoring'] },
            { title: '11. Real-World Projects', subtopics: ['Beginner-Level', 'Intermediate', 'Advanced'] }
        ]
    },
    {
        id: 'prompting',
        title: 'Advanced Prompting',
        icon: <Sparkles size={24} />,
        logo: 'https://www.svgrepo.com/show/306500/openai.svg',
        color: '#00ffaa',
        topics: [
            { title: '1. Foundations', subtopics: ['What is a Prompt?', 'AI Models & How They Think', 'Types of Prompts'] },
            { title: '2. Prompt Structure', subtopics: ['Core Components', 'The 4C Framework', 'Prompt Templates'] },
            { title: '3. Role-Based Prompting', subtopics: ['Why Assign Roles?', 'Common AI Roles', 'Multi-role Prompts'] },
            { title: '4. Step-by-Step Prompting', subtopics: ['Why Step-by-Step?', 'Breaking Tasks', 'Creating Multi-Step Prompts'] },
            { title: '5. Context Engineering', subtopics: ['Providing Context', 'Controlling AI Memory', 'Long Prompt Strategy'] },
            { title: '6. Constraint-based Prompting', subtopics: ['Why Constraints Work', 'Types of Constraints', 'Using Hard Rules'] },
            { title: '7. Fine-Tuning Output', subtopics: ['Formatting Techniques', 'Enforcing Structure', 'System Prompting'] },
            { title: '8. Troubleshooting', subtopics: ['Common Issues', 'Fixing Outputs', 'Iterative Prompting'] },
            { title: '9. Image & Video Prompting', subtopics: ['Image Prompts', 'JSON-Based Image Prompts', 'Video Prompting'] },
            { title: '10. Coding & Debugging', subtopics: ['Code Generation', 'Debugging Prompts', 'Code Review Prompts'] },
            { title: '11. Business Prompting', subtopics: ['Marketing', 'Entrepreneurship', 'Automation'] },
            { title: '12. Real-World Projects', subtopics: ['Beginner Projects', 'Intermediate Projects', 'Advanced Projects'] }
        ]
    },
    {
        id: 'nano',
        title: 'Nano Banana (No-Code)',
        icon: <Smartphone size={24} />,
        logo: 'https://cdn.simpleicons.org/webflow/ffe600',
        color: '#ffe600',
        topics: [
            { title: '1. Introduction', subtopics: ['What is Nano Banana?', 'No-Code vs Low-Code', 'Platform Overview'] },
            { title: '2. Editor Interface', subtopics: ['Canvas & Layout', 'Components Panel', 'Inspector Panel'] },
            { title: '3. UI/UX Building', subtopics: ['Page Structure', 'Styling', 'Responsive Design'] },
            { title: '4. Data Management', subtopics: ['Internal Data', 'External Data', 'Data Variables'] },
            { title: '5. API Integration', subtopics: ['API Connector Setup', 'Dynamic Data Binding', 'Error Management'] },
            { title: '6. Logic & Events', subtopics: ['Event Triggers', 'Action Types', 'Conditional Logic'] },
            { title: '7. Using AI', subtopics: ['AI-Generated UI', 'AI Data Processing', 'Multi-Agent AI Flows'] },
            { title: '8. Forms & Inputs', subtopics: ['Form Builder', 'Input Handling', 'Submission Actions'] },
            { title: '9. Authentication', subtopics: ['User Login Systems', 'Secure Pages'] },
            { title: '10. Database Integrations', subtopics: ['Firebase Integration', 'MongoDB/SQL via API', 'Google Sheets as DB'] },
            { title: '11. Workflows', subtopics: ['Triggers', 'Automation Examples', 'Event Logging'] },
            { title: '12. Publishing', subtopics: ['Testing the App', 'App Deployment', 'App Optimization'] },
            { title: '13. Real-World Projects', subtopics: ['Beginner', 'Intermediate', 'Advanced'] }
        ]
    },
    {
        id: 'firebase',
        title: 'Firebase Backend',
        icon: <Flame size={24} />,
        logo: 'https://cdn.simpleicons.org/firebase/ffca28',
        color: '#ffca28',
        topics: [
            { title: '1. Introduction', subtopics: ['What is Firebase?', 'Firebase vs Traditional Backend', 'Products Overview'] },
            { title: '2. Firebase Setup', subtopics: ['Creating a Project', 'Dev Environment Setup', 'Environment Files'] },
            { title: '3. Authentication', subtopics: ['Methods', 'Flows', 'Managing Users', 'Security Rules'] },
            { title: '4. Firestore Database', subtopics: ['Structure', 'CRUD Operations', 'Advanced Queries', 'Real-Time Listeners'] },
            { title: '5. Realtime Database', subtopics: ['Structure', 'Operations', 'Real-Time Sync'] },
            { title: '6. Cloud Storage', subtopics: ['Uploading Files', 'Download URLs', 'Storage Rules'] },
            { title: '7. Cloud Functions', subtopics: ['Introduction', 'Function Types', 'Practical Examples'] },
            { title: '8. Hosting', subtopics: ['Deploying Websites', 'Config File', 'Custom Domain Setup'] },
            { title: '9. Security Rules', subtopics: ['Firestore Rules', 'Storage Rules', 'Realtime Database Rules'] },
            { title: '10. Performance', subtopics: ['Reducing Reads/Writes', 'Indexing', 'Cost Optimization'] },
            { title: '11. Integrations', subtopics: ['Firebase + React', 'Firebase + n8n', 'Firebase + Nano Banana'] },
            { title: '12. Real-World Projects', subtopics: ['Beginner', 'Intermediate', 'Advanced'] }
        ]
    },
    {
        id: 'aws',
        title: 'AWS Backend',
        icon: <Cloud size={24} />,
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        color: '#ff9900',
        topics: [
            { title: '1. Introduction', subtopics: ['What is AWS?', 'Why Use AWS', 'Core Concepts'] },
            { title: '2. IAM', subtopics: ['Users & Roles', 'Policies', 'Access Keys & Security'] },
            { title: '3. EC2', subtopics: ['Basics', 'Launching EC2', 'Managing EC2', 'Hosting Backend'] },
            { title: '4. S3', subtopics: ['What is S3?', 'Working with Buckets', 'Access Controls', 'S3 for Applications'] },
            { title: '5. AWS Lambda', subtopics: ['Understanding Serverless', 'Creating Functions', 'Triggering Lambdas', 'Use Cases'] },
            { title: '6. API Gateway', subtopics: ['Basics', 'Integrating with Lambda', 'Security', 'Monitoring'] },
            { title: '7. DynamoDB', subtopics: ['Concepts', 'CRUD', 'Indexing', 'Use Cases'] },
            { title: '8. RDS', subtopics: ['Engines', 'Setting Up RDS', 'Connecting Backend', 'Scaling'] },
            { title: '9. CloudWatch', subtopics: ['Logs', 'Metrics', 'Alerts'] },
            { title: '10. VPC', subtopics: ['Components', 'Security Groups', 'Private vs Public Subnets'] },
            { title: '11. Deployment', subtopics: ['CodePipeline', 'CodeBuild', 'Infrastructure as Code'] },
            { title: '12. Real-World Projects', subtopics: ['Beginner', 'Intermediate', 'Advanced'] }
        ]
    },
    {
        id: 'db',
        title: 'Databases (SQL + NoSQL)',
        icon: <Database size={24} />,
        logo: 'https://cdn.simpleicons.org/postgresql/3b82f6',
        color: '#3b82f6',
        topics: [
            { title: '1. Introduction', subtopics: ['What is a Database?', 'Types of Databases', 'When to Use Which'] },
            { title: '2. SQL Databases', subtopics: ['Structure', 'Commands', 'Constraints', 'Joins', 'Indexing', 'Normalization'] },
            { title: '3. Advanced SQL', subtopics: ['Stored Procedures', 'Views', 'Transactions', 'Query Optimization'] },
            { title: '4. NoSQL Databases', subtopics: ['Structure', 'Document Databases', 'CRUD in NoSQL', 'Query Patterns', 'Aggregation'] },
            { title: '5. SQL vs NoSQL', subtopics: ['Structure', 'Flexibility', 'Scaling', 'Query Power'] },
            { title: '6. Database Design', subtopics: ['Schema Design (SQL)', 'Schema Design (NoSQL)', 'Normalization vs Denormalization'] },
            { title: '7. Security', subtopics: ['Authentication', 'Authorization', 'Data Encryption', 'SQL Injection Protection'] },
            { title: '8. Optimization', subtopics: ['Query Optimization', 'Caching', 'Sharding & Replication'] },
            { title: '9. Backup & Recovery', subtopics: ['SQL Backup', 'NoSQL Backup', 'Disaster Recovery'] },
            { title: '10. Real-World Projects', subtopics: ['Beginner', 'Intermediate', 'Advanced'] }
        ]
    },
    {
        id: 'python',
        title: 'Python Programming',
        icon: null,
        logo: 'https://cdn.simpleicons.org/python/3776ab',
        color: '#3776ab',
        topics: [
            { title: '1. Python Basics', subtopics: ['Introduction to Python', 'Installing Python', 'Python Syntax', 'Variables & Data Types', 'Input/Output'] },
            { title: '2. Control Flow', subtopics: ['Conditional Statements', 'Loops (for, while)', 'Break & Continue', 'Nested Loops'] },
            { title: '3. Data Structures', subtopics: ['Lists', 'Tuples', 'Dictionaries', 'Sets', 'List Comprehensions'] },
            { title: '4. Functions', subtopics: ['Defining Functions', 'Parameters & Arguments', 'Return Values', 'Lambda Functions', 'Scope & Namespace'] },
            { title: '5. Object-Oriented Programming', subtopics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Special Methods'] },
            { title: '6. File Handling', subtopics: ['Reading Files', 'Writing Files', 'File Modes', 'CSV & JSON Handling'] },
            { title: '7. Error Handling', subtopics: ['Try-Except Blocks', 'Exception Types', 'Custom Exceptions', 'Finally Clause'] },
            { title: '8. Modules & Packages', subtopics: ['Importing Modules', 'Creating Modules', 'Package Structure', 'Standard Library'] },
            { title: '9. Working with APIs', subtopics: ['HTTP Requests', 'REST API Integration', 'JSON Parsing', 'API Authentication'] },
            { title: '10. Data Processing', subtopics: ['Working with DataFrames', 'Data Cleaning', 'Data Analysis', 'Data Visualization'] },
            { title: '11. Web Development', subtopics: ['Flask Basics', 'Django Basics', 'Routing', 'Templates', 'Database Integration'] },
            { title: '12. Real-World Projects', subtopics: ['Beginner Projects', 'Intermediate Projects', 'Advanced Projects'] }
        ]
    },
    {
        id: 'supabase',
        title: 'Supabase Backend',
        icon: null,
        logo: 'https://cdn.simpleicons.org/supabase/3ecf8e',
        color: '#3ecf8e',
        topics: [
            { title: '1. Introduction to Supabase', subtopics: ['What is Supabase?', 'Supabase vs Firebase', 'Supabase Features', 'Setting Up Account'] },
            { title: '2. Project Setup', subtopics: ['Creating a Project', 'Project Settings', 'API Keys & URLs', 'Environment Configuration'] },
            { title: '3. Database (PostgreSQL)', subtopics: ['Database Overview', 'Creating Tables', 'Table Relationships', 'Row Level Security', 'Database Functions'] },
            { title: '4. Authentication', subtopics: ['Auth Methods', 'Email/Password Auth', 'OAuth Providers', 'Magic Links', 'User Management', 'Session Management'] },
            { title: '5. Row Level Security (RLS)', subtopics: ['Understanding RLS', 'Creating Policies', 'Policy Types', 'Testing Security'] },
            { title: '6. Storage', subtopics: ['Storage Buckets', 'Uploading Files', 'File Access Control', 'Image Transformations', 'CDN Integration'] },
            { title: '7. Realtime Subscriptions', subtopics: ['Realtime Concepts', 'Subscribing to Changes', 'Channel Management', 'Presence System'] },
            { title: '8. Edge Functions', subtopics: ['What are Edge Functions?', 'Creating Functions', 'Deploying Functions', 'Function Triggers', 'Database Functions'] },
            { title: '9. API Integration', subtopics: ['REST API', 'GraphQL API', 'Auto-generated APIs', 'API Authentication', 'Querying Data'] },
            { title: '10. Integrations', subtopics: ['Supabase + React', 'Supabase + Next.js', 'Supabase + Python', 'Supabase + n8n'] },
            { title: '11. Advanced Features', subtopics: ['Database Migrations', 'Backups & Restores', 'Performance Optimization', 'Monitoring & Logs'] },
            { title: '12. Real-World Projects', subtopics: ['Beginner Projects', 'Intermediate Projects', 'Advanced Projects'] }
        ]
    },
    {
        id: 'github',
        title: 'Git & GitHub',
        icon: null,
        logo: 'https://cdn.simpleicons.org/github/ffffff',
        color: '#24292e',
        topics: [
            { title: '1. Introduction to Version Control', subtopics: ['What is Version Control?', 'Why Use Git?', 'Git vs Other VCS', 'GitHub Overview'] },
            { title: '2. Git Basics', subtopics: ['Installing Git', 'Git Configuration', 'Initializing Repository', 'Git Workflow', 'Basic Commands'] },
            { title: '3. Commits & History', subtopics: ['Making Commits', 'Commit Messages', 'Viewing History', 'Commit Amending', 'Reverting Changes'] },
            { title: '4. Branching', subtopics: ['What are Branches?', 'Creating Branches', 'Switching Branches', 'Merging Branches', 'Branch Management'] },
            { title: '5. Remote Repositories', subtopics: ['What is Remote?', 'Connecting to GitHub', 'Push & Pull', 'Clone & Fork', 'Remote Management'] },
            { title: '6. Collaboration', subtopics: ['Pull Requests', 'Code Reviews', 'Merge Conflicts', 'Resolving Conflicts', 'Team Workflows'] },
            { title: '7. GitHub Features', subtopics: ['Issues & Projects', 'GitHub Actions', 'GitHub Pages', 'Releases & Tags', 'GitHub CLI'] },
            { title: '8. Advanced Git', subtopics: ['Rebasing', 'Cherry-picking', 'Stashing', 'Git Hooks', 'Submodules'] },
            { title: '9. Git Workflows', subtopics: ['Feature Branch Workflow', 'Gitflow Workflow', 'Forking Workflow', 'Best Practices'] },
            { title: '10. CI/CD Integration', subtopics: ['GitHub Actions Basics', 'Automated Testing', 'Deployment Pipelines', 'Workflow Automation'] },
            { title: '11. Security & Best Practices', subtopics: ['SSH Keys', 'Personal Access Tokens', 'Branch Protection', 'Security Best Practices'] },
            { title: '12. Real-World Projects', subtopics: ['Open Source Contribution', 'Project Management', 'Team Collaboration'] }
        ]
    }
];

const smartProModules = [
    {
        id: 'sp_phase1',
        title: 'Phase 1: Cognitive Foundation',
        icon: <Brain size={24} />,
        color: '#8b5cf6',
        topics: [
            { title: '1. AI-Assisted Research', subtopics: ['Smart Interpretation', 'Fact Checking', 'Deep Diving'] },
            { title: '2. Critical Thinking', subtopics: ['Problem Identification', 'Logic Building', 'Solution Mapping'] },
            { title: '3. Presentation Mastery', subtopics: ['Storytelling', 'Slide Design', 'Public Speaking'] }
        ]
    },
    {
        id: 'sp_phase2',
        title: 'Phase 2: Tech Acceleration',
        icon: <Rocket size={24} />,
        color: '#f43f5e',
        topics: [
            { title: '1. Python Core', subtopics: ['Logic', 'Syntax', 'Automation Scripting'] },
            { title: '2. AI Power Tools', subtopics: ['Generative AI', 'Voice AI', 'Image Generation'] },
            { title: '3. Web Portfolio', subtopics: ['Personal Website', 'Hosting', 'Showcasing Work'] }
        ]
    }
];

const curiosityModules = [
    {
        id: 'cur_research',
        title: 'Deep Research & Truth Seeking',
        icon: <Search size={24} />,
        color: '#f59e0b',
        topics: [
            { title: '1. The "Why" Framework', subtopics: ['Moving Beyond "What"', 'First Principles Thinking', 'Root Cause Analysis'] },
            { title: '2. Source Triangulation', subtopics: ['Verifying Facts', 'Identifying Bias', 'Primary vs Secondary Data'] },
            { title: '3. The Digital Detective', subtopics: ['Google Search Operators', 'Finding Academic Papers', 'Fact-Checking Tools'] },
            { title: '4. Questioning Authority', subtopics: ['Scientific Skepticism', 'Challenging Assumptions', 'Constructive Debating'] }
        ]
    },
    {
        id: 'cur_mastery',
        title: 'Mastery Without Memorization',
        icon: <Brain size={24} />,
        color: '#8b5cf6',
        topics: [
            { title: '1. The Feynman Technique', subtopics: ['Teaching to Learn', 'Simplifying Complexity', 'Identifying Gaps'] },
            { title: '2. Mental Models', subtopics: ['Visualization', 'Mind Mapping', 'Memory Palaces'] },
            { title: '3. Analogical Thinking', subtopics: ['Connecting Concepts', 'Real-World Metaphors', 'Pattern Recognition'] },
            { title: '4. Active Recall', subtopics: ['Spaced Repetition', 'Self-Testing', 'Flashcard Strategies'] }
        ]
    },
    {
        id: 'cur_ai',
        title: 'AI Interaction & Logic',
        icon: <Bot size={24} />,
        color: '#10b981',
        topics: [
            { title: '1. Socratic AI Dialogues', subtopics: ['Using AI as a Tutor', 'Debating with AI', 'Asking Better Questions'] },
            { title: '2. Prompting for Understanding', subtopics: ['"Explain Like I\'m 5"', 'Scenario Generation', 'Counter-Argument Prompting'] },
            { title: '3. Logic Building', subtopics: ['Algorithmic Thinking', 'Flowcharts', 'If-This-Then-That Logic'] }
        ]
    },
    {
        id: 'cur_present',
        title: 'Storytelling & Expression',
        icon: <Mic size={24} />,
        color: '#ec4899',
        topics: [
            { title: '1. Structuring Ideas', subtopics: ['Beginning-Middle-End', 'The Hero\'s Journey', 'Hook-Body-Conclusion'] },
            { title: '2. Visual Communication', subtopics: ['Slide Design (No Clutter)', 'Data Visualization', 'Color Psychology'] },
            { title: '3. Public Speaking', subtopics: ['Body Language', 'Voice Modulation', 'Overcoming Stage Fright'] }
        ]
    }
];

const foundationModules = [
    {
        id: 'fnd_main',
        title: 'Digital Literacy',
        icon: <Monitor size={24} />,
        color: '#10b981',
        topics: [
            { title: '1. Computer Basics', subtopics: ['Hardware Components', 'Windows Interface', 'File Management'] },
            { title: '2. Typing Master', subtopics: ['Keyboard Shortcuts', 'Typing Speed', 'Ergonomics'] },
            { title: '3. Internet Safety', subtopics: ['Browsers', 'Phishing Awareness', 'Digital Hygiene'] }
        ]
    }
];

const Curriculum = () => {
    const [selectedModule, setSelectedModule] = useState(null);
    const [activeTab, setActiveTab] = useState('flagship');

    const courses = {
        flagship: syllabusData,
        smart_pro: smartProModules,
        curiosity: curiosityModules,
        foundation: foundationModules
    };

    const tabs = [
        { id: 'flagship', label: 'Flagship AI & Full-Stack' },
        { id: 'smart_pro', label: 'Smart Pro Combo' },
        { id: 'curiosity', label: 'Curiosity Program' },
        { id: 'foundation', label: 'Foundation Literacy' }
    ];

    // Prevent body scroll when drawer is open
    React.useEffect(() => {
        if (selectedModule) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedModule]);

    return (
        <section className="curriculum-section" id="courses">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">LEARNING PATH</span>
                    <h2>Master the <span className="gradient-text">Future of Tech</span></h2>
                    <p className="section-desc">
                        A carefully crafted curriculum designed to take you from beginner to industry expert.
                    </p>
                </div>

                <div className="course-tabs-container">
                    <div className="course-tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`course-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="modules-grid">
                    {courses[activeTab].map((module) => (
                        <Suspense 
                            key={module.id}
                            fallback={
                                <div 
                                    className="module-card"
                                    onClick={() => setSelectedModule(module)}
                                    style={{ '--module-color': module.color }}
                                >
                                    <div className="card-glow" />
                                    <div className="card-content">
                                        <div className="card-top">
                                            <div className="module-icon-wrapper">
                                                {module.logo ? (
                                                    <img 
                                                        src={module.logo} 
                                                        alt={`${module.title} logo`} 
                                                        className="module-logo"
                                                        width="48"
                                                        height="48"
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    module.icon
                                                )}
                                            </div>
                                            <div className="module-arrow">
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <h3>{module.title}</h3>
                                            <div className="card-meta">
                                                <span className="meta-item">
                                                    <BookOpen size={14} />
                                                    {module.topics.length} Chapters
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <MotionDiv
                                className="module-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedModule(module)}
                                style={{ '--module-color': module.color }}
                            >
                            <div className="card-glow" />
                            <div className="card-content">
                                <div className="card-top">
                                    <div className="module-icon-wrapper">
                                        {module.logo ? (
                                            <img 
                                                src={module.logo} 
                                                alt={`${module.title} logo`} 
                                                className="module-logo"
                                                width="48"
                                                height="48"
                                                loading="lazy"
                                            />
                                        ) : (
                                            module.icon
                                        )}
                                    </div>
                                    <div className="module-arrow">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>

                                <div className="card-info">
                                    <h3>{module.title}</h3>
                                    <div className="card-meta">
                                        <span className="meta-item">
                                            <BookOpen size={14} />
                                            {module.topics.length} Chapters
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </MotionDiv>
                        </Suspense>
                    ))}
                </div>

                <Suspense fallback={null}>
                    <AnimatePresenceWrapper>
                        {selectedModule && (
                            <>
                                <MotionDiv
                                    className="drawer-backdrop"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedModule(null)}
                                />
                                <MotionDiv
                                    className="drawer-container"
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    style={{ '--module-color': selectedModule.color }}
                                >
                                <div className="drawer-header">
                                    <button 
                                        className="drawer-close" 
                                        onClick={() => setSelectedModule(null)}
                                        aria-label="Close curriculum drawer"
                                    >
                                        <X size={24} />
                                    </button>
                                    <div className="drawer-title-area">
                                        <div className="module-icon-wrapper large">
                                            {selectedModule.logo ? (
                                                <img
                                                    src={selectedModule.logo}
                                                    alt={`${selectedModule.title} logo`}
                                                    className="module-logo large"
                                                    width="80"
                                                    height="80"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling && (e.target.nextSibling.style.display = 'flex');
                                                    }}
                                                />
                                            ) : null}
                                            {selectedModule.logo ? (
                                                <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                    {selectedModule.icon}
                                                </div>
                                            ) : (
                                                selectedModule.icon
                                            )}
                                        </div>
                                        <div>
                                            <span className="drawer-subtitle">CURRICULUM DETAIL</span>
                                            <h3>{selectedModule.title}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="drawer-content">
                                    <div className="timeline">
                                        {selectedModule.topics.map((topic, index) => (
                                            <div key={index} className="timeline-item">
                                                <div className="timeline-marker">
                                                    <div className="marker-dot" />
                                                    <div className="marker-line" />
                                                </div>
                                                <div className="timeline-content">
                                                    <h4 className="topic-title">{topic.title}</h4>
                                                    <div className="subtopic-tags">
                                                        {topic.subtopics.map((sub, idx) => (
                                                            <span key={idx} className="subtopic-tag">
                                                                {sub}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </MotionDiv>
                        </>
                        )}
                    </AnimatePresenceWrapper>
                </Suspense>
            </div>
        </section>
    );
};

export default Curriculum;
