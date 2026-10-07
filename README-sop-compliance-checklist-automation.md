# SOP Compliance Checklist Automation

An automated checklist and reporting system built with **Google Apps Script** for structured SOP compliance monitoring and operational documentation.

## Overview

This project automates the collection, processing, and documentation of daily operational checklist data.

The system is designed around a Google Workspace workflow:

**Google Forms → Google Sheets → Google Apps Script → Google Docs → PDF/DOCX**

It demonstrates how repetitive operational checks can be converted into a structured and traceable digital workflow.

## Key Features

- Digital checklist data collection using Google Forms
- Centralized checklist database in Google Sheets
- Structured mapping between form responses and database fields
- Automated processing when new checklist data is submitted
- Google Docs report generation from a reusable template
- Automatic placeholder replacement
- Final decision/status processing
- Checkbox and checklist formatting
- Automatic folder organization by year, month, and date
- DOCX and PDF report generation
- Automated file naming and document storage
- Timezone-aware date processing
- Google Apps Script triggers for workflow automation

## Workflow

```text
User completes checklist
        ↓
Google Forms
        ↓
Google Sheets
        ↓
Apps Script trigger
        ↓
Data validation & processing
        ↓
Google Docs template
        ↓
Automatic report generation
        ↓
DOCX / PDF
        ↓
Organized Google Drive folders
```

## Technology Stack

- **Google Apps Script**
- **Google Forms**
- **Google Sheets**
- **Google Docs**
- **Google Drive**
- **Apps Script Triggers**

## Project Structure

The main source file contains the automation logic for:

- Configuration
- Database field mapping
- Checklist processing
- Data transformation
- Template handling
- Report generation
- Folder creation
- Document export
- Automated workflow execution

## Configuration

Before using this project in another environment, configure your own Google Workspace resources.

Replace the following placeholders with your own IDs:

```javascript
YOUR_DATABASE_SPREADSHEET_ID
YOUR_TEMPLATE_DOCUMENT_ID
```

Do **not** publish private Google Drive IDs, credentials, API keys, passwords, tokens, or confidential operational data in a public repository.

## Example Use Cases

This type of automation can be adapted for:

- SOP compliance monitoring
- Daily operational inspections
- Quality control checklists
- Facility inspections
- Food safety checklists
- Equipment inspections
- Staff compliance monitoring
- Internal audit documentation
- Automated operational reporting

## Customization

The system can be customized for different organizations and workflows, including:

- Custom checklist questions
- Additional database fields
- Different approval or decision logic
- Custom Google Docs templates
- Different folder structures
- Additional report formats
- Organization-specific validation rules

## Security & Privacy

This repository contains a sanitized portfolio version of the project.

Production deployments should keep private:

- Spreadsheet IDs
- Document and template IDs
- Google Drive links
- Personal information
- Internal organization data
- Credentials and access tokens
- Confidential operational records

Use your own Google Workspace resources when deploying the automation.

## Portfolio Purpose

This project demonstrates practical experience in:

- Business process automation
- Workflow automation
- Data organization
- Google Workspace integration
- Document generation
- Operational reporting
- No-code/low-code automation with Google Apps Script

## Author

**Fakhrudin Abdillah**

Interested in practical automation, Google Apps Script, data workflows, AI tools, and software projects.

---

*This repository is presented as a portfolio project. The production implementation may contain organization-specific configurations that are intentionally excluded from this public version.*
