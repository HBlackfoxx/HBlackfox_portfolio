---
layout: ../../layouts/ProjectLayout.astro
id: "wastewater_automation"
name: "Wastewater Treatment Automation"
description: "Automation of wastewater treatment processes using RSView and RSLogix"
icon: "lucide:droplet"
image: "/projects/wastewater_automation/featured.png"
date: "2022" 
category: "Automation"
client: "École Nationale des Sciences Appliquées de Marrakech"
team:
  - name: "Mohamed Boukri"
    link: "https://linkedin.com/in/mohamed-boukri-427b37189" 
  - name: "Niama Abid"
    link: "https://www.linkedin.com/in/niama-abid-42339b229/"
tech: ["RSLogix", "RSView"]
overview: "This academic project, conducted at École Nationale des Sciences Appliquées de Marrakech, automates wastewater treatment processes using RSLogix for PLC programming and RSView for designing an interactive HMI dashboard. The system monitors and controls tank levels, sludge accumulation, and alarms, enhancing operational efficiency."
features:
  - "User authentication with login/logout functionality"
  - "Real-time monitoring of liquid and sludge levels across multiple tanks"
  - "Alarm system for critical events like high liquid/sludge levels or full reservoirs"
  - "Graphical visualization of trends for liquid and sludge parameters"
  - "PLC ladder logic for automated control of pumps and valves"
process: "The project involved defining system requirements, programming PLC logic with RSLogix to manage tank levels and process flow, and designing an HMI dashboard with RSView for real-time monitoring and control. The team tested the system using simulations and live data."
challenges:
  - title: "Real-Time Data Synchronization"
    description: "Ensuring accurate real-time updates between the PLC and HMI dashboard was challenging due to sensor data latency."
    solution: "Implemented OPC communication protocols to streamline data exchange between RSLogix and RSView."
  - title: "Alarm Management"
    description: "Managing multiple alarms for different tanks required a clear and actionable interface."
    solution: "Designed an alarm log with acknowledgment features and prioritized alerts based on severity."
results: "The project delivered a functional wastewater treatment automation system with a user-friendly dashboard, successfully demonstrating real-time monitoring, control, and alarm handling. It provided hands-on experience in industrial automation technologies."
images:
  - "/projects/wastewater_automation/UI_1.png" 
  - "/projects/wastewater_automation/UI_2.png" 
  - "/projects/wastewater_automation/system.png" 
  - "/projects/wastewater_automation/dasboard_control.png" 
  - "/projects/wastewater_automation/alarm_log.png"
  - "/projects/wastewater_automation/process_schematic_1.png"
  - "/projects/wastewater_automation/process_schematic_2.png"
---

# Wastewater Treatment Automation: Monitoring and Control System

## Overview

This academic project, developed at **École Nationale des Sciences Appliquées de Marrakech**, focuses on automating wastewater treatment processes ("traitement des eaux usées") through industrial control technologies. The system leverages **RSLogix** for programming Programmable Logic Controllers (PLCs) and **RSView** for creating a Human-Machine Interface (HMI) dashboard. The dashboard enables operators to monitor tank levels, track sludge accumulation, visualize data trends, and respond to alarms in real time, contributing to efficient wastewater management.

### Key Components

- **PLC Programming with RSLogix**: Ladder logic was implemented to automate control of pumps, valves, and sensors, managing liquid and sludge levels across multiple tanks.
- **HMI Dashboard with RSView**: An interactive interface was designed to display real-time data, including tank levels (e.g., CITERNE 1–5), trend graphs (e.g., LIQUIDE_1–4, BOUE_1–3), and alarm logs (e.g., "Reservoir plein," "Niveau boue élevé").
- **User Authentication**: A login system ensures secure access, with user-specific profiles (e.g., "UTILISATEUR: MOHAMED").
- **Real-Time Monitoring**: Displays liquid and sludge levels with color-coded indicators (green for safe, red for critical).
- **Alarm Management**: Alerts operators to critical conditions, such as full reservoirs or high sludge levels, with acknowledgment options.

## Development Process

The project began with defining the requirements for a wastewater treatment system, including tank monitoring, process flow control, and alarm thresholds. The team, including **Niama Abid**, programmed the PLC logic using RSLogix, incorporating timers, sensors, and conditional statements to automate operations. Simultaneously, an HMI dashboard was developed in RSView to visualize sensor data, simulate processes, and provide supervisory controls. Testing involved simulations and live data to ensure system reliability.

## Challenges and Solutions

- **Real-Time Data Synchronization**: The challenge of syncing PLC data with the dashboard was addressed using OPC (OLE for Process Control) protocols for seamless communication.
- **Alarm Management**: A robust alarm system was created with a log interface, allowing operators to acknowledge and prioritize alerts efficiently.

## Impact and Future Directions

The system successfully automated key aspects of wastewater treatment, providing a practical demonstration of industrial automation principles. It offered valuable experience in PLC programming and HMI design, preparing the team for careers in automation engineering. Future enhancements could include predictive analytics for maintenance and integration with IoT for remote monitoring.

---