---
layout: ../../layouts/ProjectLayout.astro
id: "hac"
name: "HaC (Hardening as Code)"
description: "Linux hardening script based on ANSSI V2 guidelines"
icon: "lucide:shield-check"
image: "/projects/hac/hac_featured.png"
date: "2023"
category: "Security"
client: "Personal Project"
tech: ["Bash", "Linux", "ANSSI Guidelines", "Shell Scripting"]
overview: "HaC (Hardening as Code) is a comprehensive Linux hardening script designed to enhance system security by implementing recommendations from the ANSSI (Agence nationale de la sécurité des systèmes d'information) V2 guidelines. It follows a modular approach, making it easy to implement, customize, and maintain security measures across Linux systems."
features:
  - "Modular structure for easy customization and maintenance"
  - "Implementation of ANSSI V2 security guidelines"
  - "Automated hardening process for Linux systems"
  - "Scoring system to evaluate security compliance"
  - "Report generation for hardening status"
process: "The HaC project was developed using a modular approach. Each security recommendation from the ANSSI guidelines was implemented as a separate module, allowing for easy addition, removal, or modification of security measures. The project structure was designed to support scalability and maintainability."
challenges:
  - title: "Balancing Security and Usability"
    description: "Implementing strict security measures without compromising system functionality and user experience."
    solution: "Careful consideration of each hardening measure, with options to customize the level of security based on specific needs."
  - title: "Ensuring Compatibility Across Different Linux Distributions"
    description: "Creating a script that works across various Linux distributions with different default configurations."
    solution: "Developed a flexible approach that checks for system-specific configurations before applying changes, ensuring compatibility."
results: "HaC provides a streamlined method for hardening Linux systems according to ANSSI guidelines. It offers an efficient way to improve system security, generate compliance reports, and maintain a consistent security posture across multiple systems."
links:
  - text: "Project Repository"
    url: "https://github.com/Eljakani/HaC"
    icon: "lucide:github"
  - text: "ANSSI Guidelines"
    url: "https://cyber.gouv.fr/sites/default/files/document/fr_np_linux_configuration-v2.0.pdf"
    icon: "lucide:book-lock"
---

# HaC: Hardening as Code

## Overview

HaC (Hardening as Code) is a Linux hardening script designed to enhance the security of Linux systems by implementing recommendations from the ANSSI (Agence nationale de la sécurité des systèmes d'information) V2 guidelines. The project follows a modular structure, making it easy to implement, customize, and maintain security measures across various Linux environments.

### Key Components

1. **Modular Structure**: Each security recommendation is implemented as a separate module, allowing for easy addition, removal, or modification of security measures.
2. **Central Configuration**: A central configuration file (modules.sh) maps each module to its score and path, facilitating dynamic module loading.
3. **Main Script**: The run.sh script orchestrates the execution of module functions, handles scoring, and generates reports.
4. **Reporting**: Generates detailed reports on the hardening status of the server, stored in the reports/ directory.

## Impact and Future Directions

HaC represents a significant step forward in automating and standardizing Linux system hardening. By implementing ANSSI guidelines, it helps organizations improve their security posture and maintain compliance with recognized security standards.

Future development could focus on:

1. Expanding the module library to cover additional security guidelines and best practices.
2. Developing a user interface for easier configuration and report visualization.
3. Implementing integration with configuration management tools for large-scale deployments.
4. Adding support for automatic updates to address evolving security threats and guidelines.

HaC aims to make robust security practices more accessible and manageable for system administrators and security professionals, contributing to improved overall cybersecurity in Linux environments.