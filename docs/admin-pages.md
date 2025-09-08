# CloudFi Labs - Admin Pages Documentation

> Comprehensive documentation for all administrative pages in the CloudFi Labs application

## 📋 Overview

This document provides detailed information about all administrative pages in the CloudFi Labs application. These pages are designed for administrators and authorized personnel to manage various aspects of the platform, including users, projects, analytics, billing, and system settings.

## 🏠 Admin Dashboard (`/admin`)

### Location
`apps/frontend/src/app/admin/page.tsx`

### Purpose
Central dashboard for administrators to get an overview of key metrics and recent activity.

### Key Features
- **Statistics Cards**: Displays key metrics including total users, revenue, reports, and active users
- **Revenue Overview Chart**: Visual representation of revenue trends
- **Recent Activity Feed**: Timeline of recent administrative actions
- **User Management Section**: Quick overview of user accounts with management actions
- **Responsive Design**: Adapts to different screen sizes for optimal viewing

### Components
- Interactive statistics cards with icons
- Placeholder for revenue chart (would use Recharts in production)
- Activity timeline with user actions
- User management table with edit capabilities

## 👥 User Management (`/admin/users`)

### Location
`apps/frontend/src/app/admin/users/page.tsx`

### Purpose
Manage all user accounts within the system, including viewing, creating, editing, and deleting users.

### Key Features
- **User Statistics**: Overview of total, active, away, and offline users
- **Search Functionality**: Find users by name, email, or department
- **Filtering Options**: Filter by role (Admin, Moderator, User) and status (Active, Away, Offline)
- **User Table**: Detailed view of all users with key information
- **Action Buttons**: View, edit, and delete actions for each user
- **Import/Export**: Import and export user data
- **Add User**: Create new user accounts
- **Pagination**: Navigate through user records

### User Information Displayed
- User avatar with initials
- Full name and email
- Role with color-coded badges
- Department
- Status with color-coded indicators
- Last active time
- Join date

## 📁 Project Management (`/admin/projects`)

### Location
`apps/frontend/src/app/admin/projects/page.tsx`

### Purpose
Manage all client projects, including tracking progress, budget, and team assignments.

### Key Features
- **Project Statistics**: Overview of total, active, planning, and completed projects
- **Budget Tracking**: Total budget and average team size metrics
- **Search Functionality**: Find projects by name, description, or owner
- **Filtering Options**: Filter by status (Planning, Active, Completed, On Hold) and provider (AWS, Google Cloud, Azure)
- **Sorting Options**: Sort by name, last updated, progress, or budget
- **Project Table**: Detailed view of all projects with key metrics
- **Progress Visualization**: Visual progress bars for each project
- **Action Buttons**: View, edit, and delete actions for each project
- **Add Project**: Create new project entries
- **Pagination**: Navigate through project records

### Project Information Displayed
- Project name and description
- Owner and team size
- Cloud provider with icons
- Status with color-coded badges
- Budget utilization
- Progress percentage with visual indicator
- Start and end dates

## 📁 Project Detail (`/admin/projects/[id]`)

### Location
`apps/frontend/src/app/admin/projects/[id]/page.tsx`

### Purpose
Detailed view of a specific project with comprehensive information and management options.

### Key Features
- **Tabbed Interface**: Navigate between Overview, Team, Milestones, Activity, and Billing sections
- **Project Statistics**: Timeline, progress, budget, and billing information
- **Progress Visualization**: Visual indicators for overall progress and budget utilization
- **Team Management**: View all team members assigned to the project
- **Milestone Tracking**: Track project milestones with status indicators
- **Activity Feed**: Recent project-related activities
- **Billing Information**: Invoicing details and payment status
- **Edit Actions**: Modify project details

### Tab Sections
1. **Overview**: Project progress, budget utilization, and key details
2. **Team**: List of team members with roles
3. **Milestones**: Project milestones with status tracking
4. **Activity**: Recent activities related to the project
5. **Billing**: Invoicing information and payment status

## 📊 Analytics Dashboard (`/admin/analytics`)

### Location
`apps/frontend/src/app/admin/analytics/page.tsx`

### Purpose
Track business metrics and performance indicators across the platform.

### Key Features
- **Enhanced Metrics**: Cloud spend, infrastructure cost, network usage, and active reports
- **Time Period Selection**: View data for daily, weekly, monthly, or yearly periods
- **Date Range Filtering**: Filter analytics by specific date ranges
- **Export Functionality**: Export analytics data
- **Cloud Spend Visualization**: Breakdown of spending by cloud provider
- **User Growth Chart**: Visualization of user acquisition trends
- **Conversion Funnel**: Analysis of user conversion metrics
- **Top Products Table**: Performance metrics for key products

### Analytics Information Displayed
- Revenue and user growth charts
- Cloud spend breakdown by provider
- Recent activity feed
- Product performance metrics with growth indicators
- Conversion funnel visualization

## 📄 Reports Management (`/admin/reports`)

### Location
`apps/frontend/src/app/admin/reports/page.tsx`

### Purpose
Manage all generated reports, including viewing, creating, and tracking report status.

### Key Features
- **Report Statistics**: Overview of total, completed, processing, and failed reports
- **Search Functionality**: Find reports by title or author
- **Filtering Options**: Filter by report type and status
- **Date Range Filtering**: Filter reports by date range
- **Reports Table**: Detailed view of all reports with key information
- **Status Indicators**: Visual indicators for report status (Completed, Processing, Failed)
- **Action Buttons**: View and download actions for each report
- **Generate Report**: Create new reports
- **Pagination**: Navigate through report records

### Report Information Displayed
- Report title
- Report type with color-coded badges
- Generation date
- Author
- File size
- View count
- Status with color-coded indicators

## 🔍 Audit Logs (`/admin/audit`)

### Location
`apps/frontend/src/app/admin/audit/page.tsx`

### Purpose
Track all system activities and user actions for security and compliance purposes.

### Key Features
- **Audit Statistics**: Overview of total logs, successful actions, failed actions, and warnings
- **Search Functionality**: Find logs by user or action
- **Filtering Options**: Filter by resource type and status
- **Date Range Filtering**: Filter logs by date range
- **Export Functionality**: Export audit logs for compliance purposes
- **Audit Logs Table**: Detailed view of all system activities
- **Status Indicators**: Visual indicators for log status (Success, Failed, Warning)
- **Pagination**: Navigate through audit log records

### Audit Information Displayed
- User who performed the action
- Action description
- Resource type with color-coded badges
- Timestamp
- IP address
- Status with color-coded indicators

## 💰 Billing Management (`/admin/billing`)

### Location
`apps/frontend/src/app/admin/billing/page.tsx`

### Purpose
Manage customer subscriptions, payments, and billing information.

### Key Features
- **Billing Statistics**: Overview of total revenue, pending payments, overdue payments, and failed payments
- **Search Functionality**: Find customers by name or email
- **Filtering Options**: Filter by payment status and subscription plan
- **Customer Billing Table**: Detailed view of all customer billing information
- **Status Indicators**: Visual indicators for payment status (Paid, Pending, Overdue, Failed)
- **Action Buttons**: View, edit, and delete actions for each billing record
- **Add Customer**: Create new customer billing entries
- **Subscription Plans Overview**: Display of all available subscription plans
- **Pagination**: Navigate through billing records

### Billing Information Displayed
- Customer name and email
- Subscription plan with color-coded badges
- Billing amount
- Billing date
- Next billing date
- Payment status with color-coded indicators

### Subscription Plans
- Starter plan ($99/month)
- Professional plan ($499/month)
- Business plan ($899/month)
- Enterprise plan (Custom pricing)

## 📦 Subscription Management (`/admin/subscription`)

### Location
`apps/frontend/src/app/admin/subscription/page.tsx`

### Purpose
Manage customer subscriptions, plans, and recurring revenue metrics.

### Key Features
- **Subscription Statistics**: Overview of active subscriptions, monthly recurring revenue, annual recurring revenue, and churn rate
- **Search Functionality**: Find subscriptions by customer name or email
- **Filtering Options**: Filter by subscription status and plan type
- **Subscriptions Table**: Detailed view of all customer subscriptions with key information
- **Status Indicators**: Visual indicators for subscription status (active, cancelled, trial)
- **Action Buttons**: View, edit, and delete actions for each subscription
- **Create Subscription**: Create new customer subscriptions
- **Subscription Plans Overview**: Display of all available subscription plans with features
- **Pagination**: Navigate through subscription records

### Subscription Information Displayed
- Customer name and email
- Subscription plan with color-coded badges
- Subscription status with color-coded indicators
- Number of users
- Subscription amount
- Start date
- End date

### Subscription Plans
- Starter plan ($99/month) - Up to 5 users
- Professional plan ($499/month) - Up to 25 users
- Business plan ($899/month) - Up to 100 users
- Enterprise plan (Custom pricing) - Unlimited users

## ⚙️ Settings (`/admin/settings`)

### Location
`apps/frontend/src/app/admin/settings/page.tsx`

### Purpose
Configure application settings and preferences across multiple categories.

### Key Features
- **Tabbed Interface**: Navigate between General, Security, Notifications, Appearance, Billing, and Integrations settings
- **General Settings**: Site name, timezone, language, and maintenance mode
- **Security Settings**: Two-factor authentication options
- **Notification Preferences**: Email and push notification settings
- **Appearance Settings**: Theme selection and sidebar preferences
- **Billing Settings**: Billing contact information
- **Integration Settings**: API key management
- **Save Functionality**: Save all settings changes
- **Export Settings**: Export current settings configuration

### Settings Categories
1. **General**: Basic site configuration
2. **Security**: Authentication and security settings
3. **Notifications**: Communication preferences
4. **Appearance**: Visual theme and layout options
5. **Billing**: Billing-related settings
6. **Integrations**: Third-party service connections

## 👤 Admin Profile (`/admin/profile`)

### Location
`apps/frontend/src/app/admin/profile/page.tsx`

### Purpose
Manage administrator profile information and account settings.

### Key Features
- **Profile Information Display**: Avatar, name, role, department, email, join date, and last login
- **Edit Profile**: Modify personal information including name, email, and department
- **Security Settings**: Change password functionality
- **Notification Preferences**: Configure notification settings
- **Responsive Layout**: Two-column layout for profile information and edit form

### Profile Information Displayed
- User avatar
- Full name and role
- Department
- Email address
- Join date
- Last login timestamp

## 🎨 Design Principles

All admin pages follow these design principles:

### Dashboard-First Approach
- Pages are designed with dashboard-style layouts for efficient information consumption
- Key metrics are prominently displayed using statistics cards
- Data visualization is used to present complex information clearly

### Responsive Design
- All pages adapt to different screen sizes
- Mobile-friendly layouts with appropriate spacing and touch targets
- Consistent navigation patterns across devices

### Accessibility
- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Color contrast compliance

### Performance
- Optimized components for fast loading
- Efficient data handling
- Minimal third-party dependencies

## 🔧 Technical Implementation

### Framework
- Built with Next.js 14 using App Router
- TypeScript for type safety
- Tailwind CSS for styling
- React Server Components for performance
- Lucide React for icons

### Components
- Reusable UI components from `@/components/ui/`
- Custom admin components for specialized functionality
- Consistent design system with appropriate spacing and typography

### Data Management
- Mock data for demonstration purposes
- State management using React hooks
- Form handling with controlled components
- Filtering and sorting logic for data tables

## 📱 Responsive Design Features

### Breakpoints
- Mobile: 0px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

### Layout Patterns
- Flexible grid systems using Tailwind CSS
- Adaptive component sizing
- Collapsible navigation menus
- Touch-optimized controls

## 🔒 Security Considerations

### Authentication
- All admin pages require authentication
- Role-based access control
- Session management

### Data Protection
- Secure handling of sensitive information
- Proper validation of user inputs
- Protection against common web vulnerabilities

## 🔑 API Management (`/admin/api`)

### Location
`apps/frontend/src/app/admin/api/page.tsx`

### Purpose
Manage API keys and permissions for integrations with external services.

### Key Features
- **API Statistics**: Overview of total, active, revoked, and production API keys
- **Search Functionality**: Find API keys by name or key value
- **Filtering Options**: Filter by environment (development, staging, production) and status (active, revoked)
- **API Keys Table**: Detailed view of all API keys with key information
- **Status Indicators**: Visual indicators for key status (active, revoked)
- **Environment Tags**: Color-coded tags for environment (development, staging, production)
- **Permissions Display**: View permissions associated with each API key
- **Action Buttons**: View, edit, and delete actions for each API key
- **Create API Key**: Generate new API keys with custom permissions
- **Copy to Clipboard**: Easily copy API keys to clipboard
- **Pagination**: Navigate through API key records

### API Key Information Displayed
- API key name
- Key value (masked for security)
- Environment with color-coded badges
- Permissions list
- Creation date
- Last used timestamp
- Status with color-coded indicators

## 📜 Logs Management (`/admin/logs`)

### Location
`apps/frontend/src/app/admin/logs/page.tsx`

### Purpose
View and analyze application logs for troubleshooting and monitoring system health.

### Key Features
- **Log Statistics**: Overview of total logs, info logs, warnings, and errors
- **Search Functionality**: Find logs by message, source, or IP address
- **Filtering Options**: Filter by log level (info, warning, error) and date range
- **Export Functionality**: Export logs for analysis
- **Logs Table**: Detailed view of all application logs
- **Level Indicators**: Visual indicators for log level (info, warning, error)
- **Pagination**: Navigate through log records

### Log Information Displayed
- Timestamp
- Log level with icons and color-coded badges
- Log message
- Source service
- IP address

## 💾 Backup Management (`/admin/backups`)

### Location
`apps/frontend/src/app/admin/backups/page.tsx`

### Purpose
Manage and monitor database backups for disaster recovery purposes.

### Key Features
- **Backup Statistics**: Overview of total backups, completed backups, failed backups, and total backup size
- **Search Functionality**: Find backups by name
- **Filtering Options**: Filter by backup type (full, incremental) and status (completed, failed)
- **Backup History Table**: Detailed view of all backup records
- **Status Indicators**: Visual indicators for backup status (completed, failed)
- **Type Tags**: Color-coded tags for backup type (full, incremental)
- **Action Buttons**: Download and view actions for each backup
- **Run Backup Now**: Manually trigger a backup
- **Backup Configuration**: View and manage backup schedules
- **Pagination**: Navigate through backup records

### Backup Information Displayed
- Backup name
- Status with icons and color-coded badges
- Backup type with color-coded badges
- Backup size
- Creation timestamp
- Completion timestamp
- Duration

## 🛠️ Development Guidelines

### Adding New Admin Pages
1. Create page component in `apps/frontend/src/app/admin/` directory
2. Implement responsive design with Tailwind CSS
3. Follow established design patterns
4. Add navigation links in the admin layout
5. Update this documentation
6. Test on multiple device sizes

### Updating Existing Pages
1. Follow established design patterns
2. Maintain consistency with other admin pages
3. Ensure mobile responsiveness
4. Test all interactive elements
5. Update documentation as needed

## 📞 Support

For questions about admin pages or to report issues:
- Open a GitHub issue in the repository
- Contact the development team through Slack
- Refer to the main documentation in `docs/` directory

---

*Last Updated: September 9, 2025*  
*Documentation for CloudFi Labs Admin Pages*