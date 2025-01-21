# Sally's DevOps Adventure: File Management and Reporting Automation

Meet Sally, a seasoned DevOps Engineer at TechEdge Solutions, a fast-growing company specializing in cloud infrastructure and automation tools. Sally's role involves streamlining processes, automating repetitive tasks, and ensuring smooth operations for the company. Recently, Sally has been tasked with addressing two pressing challenges that hinder the efficiency of file management and reporting workflows.

![automate](images/automate.jpeg)

### Tasks to Accomplish

1. **File Renaming Utility**: Automate the renaming of multiple files in a directory based on specific patterns or rules.
2. **Report Generator**: Generate consistent and structured reports from data for regular updates.

### Challenges

1. **File Renaming Utility**:
   - Files have inconsistent naming conventions, causing confusion.
   - Manual renaming is time-consuming and error-prone.
   - The utility must handle different file types and naming patterns.

2. **Report Generator**:
   - The team requires frequent updates but lacks a standardized format.
   - Data for reports often comes from disparate sources, leading to inconsistency.
   - Generating reports manually is slow and prone to missing critical details.

### Pre-Requisites

Before diving into the solutions, Sally must ensure the following:

1. **Environment Setup**:
   - Python 3.8 or later installed.
   - Basic knowledge of Python libraries such as `os`, `pandas`, and file handling.

2. **Access**:
   - Sufficient permissions to access and modify the directory containing files.
   - Access to the data sources for generating reports.

3. **Dependencies**:
   - Install required Python libraries:
     ```bash
     pip install pandas
     ```

### Task 1: File Renaming Utility

To help automate the file renaming task, let's start by defining some key rules for renaming files. 

#### File Naming Rules

1. Add a prefix to the file names.
2. Ensure all file names are in lowercase.
3. Replace spaces with underscores.

🚨 **Question**

Could you please create two files with incorrect names in your project folder? 

#### Example Files

1. `Incorrect Name 1.txt`
2. `Another Incorrect Name 2.txt`

🚨 **Question**

Could you build the automation to work on above two files and fix their names according to the rules we establish ?

###  Task 2: Report Generator

1. Input data for the report - [report-data](data/report-data.json)

2. Report Requirements:
**Report Structure**:
    - Title: Include a clear and descriptive title for the report.
    - Date: Add the date of the report generation.
    - Summary: Provide a brief summary of the report's contents.
    - Data Sections: Organize data into sections with headings.
    - Visuals: Incorporate charts or graphs if necessary for better data representation.
  

3. Write the Script:

🚨 **Question**

Need to generate a script to automate the report generation for the input data "report-data.json" as per the  report requirements outlined using python, pandas to summarise based on departments ?


### Conclusion

With these utilities in place, Sally successfully tackles the challenges of file renaming and report generation. His solutions not only save time but also improve accuracy and consistency in TechEdge Solutions’ workflows. Sally’s efforts highlight the importance of automation in modern DevOps practices.

For users who want to review the solution, please refer to and access it from [devops-challenges-3-solution](devops-challenges-3-solution.md).