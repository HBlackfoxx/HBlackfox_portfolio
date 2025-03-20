---
layout: ../../layouts/ProjectLayout.astro
id: "intelligent_production_planning"
name: "Intelligent Production Planning"
description: "Comparative Analysis of Traditional and AI-Based Methods for Manufacturing Optimization"
icon: "lucide:factory"
image: "/projects/intelligent_production_planning/featured.png"
date: "2024"
category: "Research"
client: "École Centrale de Lyon"
team:
  - name: "Mohamed Boukri"
    link: "https://linkedin.com/in/mohamed-boukri-427b37189"
tech: ["Python", "PyTorch", "NumPy", "Matplotlib"]
overview: "This project conducts a systematic review and comparative analysis of optimization methods for manufacturing production planning, emphasizing the emergence of AI techniques. It evaluates classical approaches (linear programming, priority rules), metaheuristic algorithms (swarm optimization, genetic algorithms), and machine learning architectures (DQN and QMIX reinforcement learning) in a simulated industrial environment, focusing on minimizing the makespan."
features:
  - "Analysis of classical methods like linear programming and FIFO"
  - "Evaluation of metaheuristics including swarm optimization and genetic algorithms"
  - "Implementation of reinforcement learning with DQN and QMIX"
  - "Simulation of a dynamic manufacturing environment"
  - "Performance comparison based on makespan minimization"
process: "The project involved designing a simulated Job Shop Scheduling environment with 5 workstations and 5 tasks. Traditional methods (FIFO, Random) and AI-based approaches (DQN, QMIX) were implemented and tested using Python and PyTorch. The methodology included training reinforcement learning models over 500 episodes, optimizing hyperparameters, and evaluating performance against the makespan metric."
challenges:
  - title: "Complexity of the Scheduling Problem"
    description: "The dynamic environment with multiple jobs, machines, and constraints increased computational complexity."
    solution: "Simplified the initial setup with fewer tasks and scaled complexity incrementally during testing."
  - title: "Training Time for Reinforcement Learning Models"
    description: "Training DQN and QMIX models required significant time and computational resources."
    solution: "Optimized hyperparameters and utilized a replay buffer to enhance training efficiency."
results: "AI-based methods outperformed traditional approaches, with QMIX reducing the makespan by 25% and DQN by 20.8% compared to FIFO. The study highlights the potential of multi-agent reinforcement learning for agile manufacturing."
---

# Intelligent Production Planning: Comparative Analysis of Traditional and AI-Based Methods

## Overview

This research project explores optimization methods for intelligent production planning in manufacturing, comparing traditional techniques with AI-driven approaches. Conducted as part of a Master's degree in Industrial Engineering at École Centrale de Lyon, it systematically reviews three categories: classical methods (e.g., linear programming, FIFO), metaheuristic algorithms (e.g., swarm optimization, genetic algorithms), and machine learning architectures (specifically reinforcement learning with DQN and QMIX). Using a simulated Job Shop Scheduling environment, the study assesses these methods based on their ability to minimize the makespan—the total time to complete all production tasks.

### Key Components

- **Classical Methods**: Techniques like linear programming and FIFO prioritize simplicity but struggle with dynamic environments.
- **Metaheuristics**: Algorithms such as swarm optimization and genetic algorithms offer flexibility for complex problems.
- **Reinforcement Learning**: Single-agent (DQN) and multi-agent (QMIX) architectures adapt dynamically to optimize scheduling.
- **Simulation Environment**: A Job Shop setup with 5 workstations, 5 tasks, and dynamic constraints like resource availability and processing times.
- **Evaluation Metric**: Makespan, measuring efficiency in completing all tasks.

## Impact and Future Directions

The findings demonstrate that AI-based methods, particularly QMIX and DQN, significantly outperform traditional approaches, achieving makespan reductions of 25% and 20.8% respectively compared to FIFO. This suggests a strong potential for reinforcement learning in enhancing manufacturing agility, aligning with Industry 4.0 demands. Future research could explore hybrid methods combining traditional rules with AI, neurosymbolic architectures for better interpretability, federated learning across factories, and improved handling of uncertainties like machine failures.
