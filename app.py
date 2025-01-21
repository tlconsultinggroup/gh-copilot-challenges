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


