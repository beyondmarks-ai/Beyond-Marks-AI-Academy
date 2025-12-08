import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Palette, Terminal, Globe, Share2, Sparkles,
    Smartphone, Flame, Cloud, Database, ChevronDown, ChevronUp, CheckCircle2
} from 'lucide-react';
import './Curriculum.css';

const syllabusData = [
    {
        id: 'uiux',
        title: 'UI/UX Design',
        icon: <Palette size={24} />,
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
    }
];

import { X, ArrowRight, BookOpen } from 'lucide-react';

const Curriculum = () => {
    const [selectedModule, setSelectedModule] = useState(null);

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

                <div className="modules-grid">
                    {syllabusData.map((module) => (
                        <motion.div
                            key={module.id}
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
                                        {module.icon}
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
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedModule && (
                        <>
                            <motion.div
                                className="drawer-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedModule(null)}
                            />
                            <motion.div
                                className="drawer-container"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                style={{ '--module-color': selectedModule.color }}
                            >
                                <div className="drawer-header">
                                    <button className="drawer-close" onClick={() => setSelectedModule(null)}>
                                        <X size={24} />
                                    </button>
                                    <div className="drawer-title-area">
                                        <div className="module-icon-wrapper large">
                                            {selectedModule.icon}
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
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Curriculum;
