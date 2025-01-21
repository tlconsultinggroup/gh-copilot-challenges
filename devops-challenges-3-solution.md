# Sally's DevOps Adventure: File Management and Reporting Automation

Meet Sally, a seasoned DevOps Engineer at TechEdge Solutions, a fast-growing company specializing in cloud infrastructure and automation tools. Sally's role involves streamlining processes, automating repetitive tasks, and ensuring smooth operations for the company. Recently, Sally has been tasked with addressing two pressing challenges that hinder the efficiency of file management and reporting workflows.

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

### Step-by-Step Workflow

#### Task 1: File Renaming Utility

To help automate the file renaming task, let's start by defining some key rules for renaming files. 

### File Naming Rules

1. Add a prefix to the file names.
2. Ensure all file names are in lowercase.
3. Replace spaces with underscores.

Could you please create two files with incorrect names in your project folder? 

### Example Files

1. `Incorrect Name 1.txt`
2. `Another Incorrect Name 2.txt`

### Automation Script

```python
import os

def rename_files(directory, prefix, start_number=1):
    files = os.listdir(directory)
    for index, file in enumerate(files, start=start_number):
        ext = os.path.splitext(file)[1]
        new_name = f"{prefix}_{index}{ext}".lower().replace(" ", "_")
        os.rename(os.path.join(directory, file), os.path.join(directory, new_name))

# Example Usage
rename_files("/path/to/directory", "file")
```


####  Task 2: Report Generator

1. Gather Requirements:
   
- Define the data points needed for the report.
- Standardize the report format.
  
  
2. Write the Script:

```python
import pandas as pd
import json
from datetime import datetime

# Load data from JSON file
with open('data/report-data.json') as f:
    data = json.load(f)

# Convert data to DataFrame
df = pd.DataFrame(data['employees'])

# Check if 'department' column exists
if 'department' in df.columns:
    # Group by department and calculate summary statistics
    summary = df.groupby('department').agg({
        'salary': ['mean', 'min', 'max', 'sum', 'count']
    }).reset_index()

    # Flatten the MultiIndex columns
    summary.columns = ['Department', 'Average Salary', 'Min Salary', 'Max Salary', 'Total Salary', 'Employee Count']

    # Generate report
    report_title = "Employee Salary Report"
    report_date = datetime.now().strftime("%Y-%m-%d")
    report_summary = "This report provides a summary of employee salaries by department."

    # Print report
    print(f"{report_title}\nDate: {report_date}\n")
    print(f"{report_summary}\n")
    print(summary.to_string(index=False))

else:
    print("Column 'department' does not exist in the DataFrame")
```


#### Conclusion

With these utilities in place, Sally successfully tackles the challenges of file renaming and report generation. His solutions not only save time but also improve accuracy and consistency in TechEdge Solutions’ workflows. Sally’s efforts highlight the importance of automation in modern DevOps practices.