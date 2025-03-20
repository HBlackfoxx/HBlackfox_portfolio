---
layout: ../../layouts/ProjectLayout.astro
id: "maintenance_insights"
name: "Maintenance Insights Dashboard"
description: "Power BI dashboard for visualizing maintenance KPIs at Mondelez"
icon: "lucide:bar-chart"
image: "/projects/maintenance_insights/featured.png"
date: "2024"
category: "Data Analytics"
client: "Mondelez International"
team:
  - name: "Mohamed Boukri"
    link: "https://linkedin.com/in/mohamed-boukri-427b37189"  # Replace with actual link if available
tech: ["Power BI", "Excel", "SharePoint"]
overview: "This project involves the development of a Power BI dashboard during an internship at Mondelez International. The dashboard connects to an Excel file on SharePoint to visualize key maintenance KPIs, such as downtime, MTBF, and number of failures. It features interactive filters and slicers for date, production lines, and machines, along with visualizations like bar charts, line charts, and donut charts to analyze operational efficiency and maintenance performance."
features:
  - "Connection to SharePoint Excel file for real-time data updates"
  - "Interactive filters for date (year, month, week), production lines, and machines"
  - "KPI cards displaying metrics like Total Downtime, MTBF, and Number of Failures"
  - "Bar charts and line charts for downtime analysis and trend visualization"
  - "Donut charts for downtime distribution across production lines"
process: "The dashboard was built using Power BI, with data sourced from an Excel file hosted on SharePoint. The development process included designing the data model, creating calculated measures for KPIs, and implementing interactive visualizations. Mock data was used to ensure confidentiality while demonstrating the dashboard's capabilities."
challenges:
  - title: "Handling Large Data Volumes"
    description: "The Excel file contained extensive historical data, requiring efficient data modeling to ensure dashboard performance."
    solution: "Optimized the data model by using summarized tables and leveraging Power BI's data aggregation features."
  - title: "Ensuring Data Confidentiality"
    description: "Due to sensitive operational data, the dashboard needed to be developed with mock data while maintaining realism."
    solution: "Created a representative mock dataset that mirrored the structure and variability of the actual data without exposing confidential information."
results: "The dashboard provides Mondelez with a powerful tool for monitoring and analyzing maintenance KPIs, enabling data-driven decisions to improve operational efficiency. It has been well-received by the maintenance team for its intuitive interface and actionable insights."
images:
  - "/projects/maintenance_insights/maintenance_insights_featured.png"
  - "/projects/maintenance_insights/interface2.png"
  - "/projects/maintenance_insights/interface3.png"
---

# Maintenance Insights Dashboard: Visualizing KPIs for Operational Efficiency

## Overview

Developed during an internship at Mondelez International, this Power BI dashboard serves as a critical tool for visualizing and analyzing maintenance Key Performance Indicators (KPIs). By connecting to an Excel file hosted on SharePoint, it provides real-time insights into metrics such as downtime, Mean Time Between Failures (MTBF), and the number of equipment failures. The dashboard features a range of interactive elements and visualizations designed to help the maintenance team identify trends, optimize resource allocation, and improve overall operational efficiency.

### Key Components

- **Data Source**: Excel file on SharePoint, ensuring seamless data updates and accessibility.
- **Interactive Filters**: Slicers for date (year, month, week), production lines (e.g., HAAS1–HAAS5), SGA (e.g., Packaging, Process), and specific machines (e.g., CAVANNA-01 to CAVANNA-11).
- **Visualizations**:
  - **KPI Cards**: Highlight critical metrics like Total Downtime, MTBF, and Number of Failures.
  - **Bar Charts**: Compare downtime across production lines (e.g., HAA51–HAA55).
  - **Line Charts**: Track downtime trends over time (e.g., monthly from Feb 2023 to Dec 2024).
  - **Donut Charts**: Illustrate the distribution of downtime across different lines by percentage.
- **Calculated Measures**: Custom DAX formulas to compute KPIs and support dynamic analysis.

## Impact and Future Directions

The Maintenance Insights Dashboard has empowered the Mondelez maintenance team with actionable insights, fostering a data-driven approach to operational management. Its intuitive design and interactive features have been praised for enhancing decision-making processes. Future enhancements could include integrating predictive maintenance models using machine learning to anticipate equipment failures and further reduce downtime.