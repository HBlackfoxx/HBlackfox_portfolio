---
layout: ../../layouts/ProjectLayout.astro
id: "siemtinel"
name: "SIEMTINEL"
description: "Cloud-based SIEM with ELK Stack and Suricata"
icon: "lucide:shield"
image: "/projects/siemtinel/siemtinel_featured.png"
date: "2024"
category: "Security"
client: "School Project"
team:
    - name: "Moad El Motassadeq"
      link: "https://github.com/moadza"
    - name: "Saaida Hnais"
      link: "https://github.com/saaida1"
tech: ["Elasticsearch", "Logstash", "Kibana", "Suricata", "Kafka", "Filebeat", "Docker", "AWS"]
overview: "SIEMTINEL is a comprehensive Security Information and Event Management (SIEM) system that integrates the ELK Stack with Suricata for network intrusion detection, Kafka for scalable log transport, and Filebeat for log shipping. Deployed in the cloud, SIEMTINEL offers real-time threat detection, analysis, and incident response."
features:
  - "Real-time log ingestion, processing, and threat detection"
  - "Suricata-powered network threat monitoring"
  - "Kafka-based distributed log transport"
  - "Customizable Kibana dashboards for visual insights"
  - "Scalable cloud infrastructure for high-volume log analysis"
process: "The SIEMTINEL project followed an agile development methodology, beginning with setting up the ELK stack and Suricata for intrusion detection. We integrated Kafka and Filebeat to enhance log transportation and applied containerization through Docker to streamline deployment and scalability."
challenges:
  - title: "Handling High-Volume Log Data"
    description: "The system had to process millions of logs per second without compromising real-time threat detection."
    solution: "We deployed Kafka for distributed log transport and leveraged Elasticsearch's scalability for efficient log storage and querying."
  - title: "Reducing False Positives"
    description: "Initial alert rules generated an overwhelming number of false positives, affecting the system's reliability."
    solution: "Enhanced the alerting rules to reduce noise and improve detection accuracy."
results: "SIEMTINEL is operational across multiple environments, processing over a billion log events daily. We have successfully reached almost 70% of our objectives, significantly enhancing threat detection and response capabilities."
links:
  - text: "Project Repository"
    url: "https://github.com/Eljakani/SIEMTINEL"
    icon: "lucide:github"
images:
  - "/projects/siemtinel/001.jpeg"
  - "/projects/siemtinel/002.jpeg"
  - "/projects/siemtinel/003.jpeg"
  - "/projects/siemtinel/004.jpeg"
  - "/projects/siemtinel/005.jpeg"
---

# SIEMTINEL: Cloud-based SIEM with ELK Stack and Suricata

## Overview

SIEMTINEL is designed to address modern cybersecurity challenges by integrating the ELK stack (Elasticsearch, Logstash, and Kibana) with Suricata for network intrusion detection. With the use of Kafka and Filebeat for log transportation and Docker for containerization, it provides a scalable and efficient solution for real-time threat monitoring and incident response.

### Key Components

1. **Log Ingestion and Transport**: Uses Filebeat and Kafka for high-volume log collection and transport from various sources to the central SIEM infrastructure.
2. **Threat Detection**: Suricata monitors network traffic for malicious activities and generates security alerts.
3. **Data Processing and Analysis**: Logstash processes the logs, while Elasticsearch indexes and stores the data for fast searching and analysis.
4. **Visualization and Reporting**: Kibana enables security teams to visualize real-time data and generate insightful reports.
5. **Automated Response**: Integrated with security tools to support automated incident responses.

## Impact and Future Directions

theres a lot of text here