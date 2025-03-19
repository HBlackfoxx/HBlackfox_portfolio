---
layout: ../../layouts/ProjectLayout.astro
id: "quizqube"
name: "QuizQube"
description: "AI-powered quiz platform for learning and knowledge testing"
icon: "lucide:brain-circuit"
image: "/projects/quizqube/quizqube_featured.png"
date: "2024"
category: "Personal"
client: "Side Project"
team:
    - name: "El Jakani"
      link: "https://github.com/Eljakani"
tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "NextAuth.js", "AWS S3", "Lucide React"]
overview: "QuizQube is an AI-powered quiz platform that helps users learn and test their knowledge by generating quizzes from uploaded documents. This project was created as a side project to explore Next.js and interactions with Large Language Models (LLMs)."
features:
  - "Upload PDF documents (up to 3)"
  - "Generate quizzes based on uploaded content"
  - "Customize quiz settings (number of questions, difficulty, type of quiz)"
  - "Interactive quiz-taking experience"
  - "Results overview with correct answers"
  - "User authentication"
  - "Personalized settings"
process: "The development of QuizQube followed an iterative process, starting with the implementation of document upload functionality and quiz generation. We then focused on creating an engaging user interface and integrating user authentication for personalized experiences."
challenges:
  - title: "Integrating AI for Quiz Generation"
    description: "Implementing an effective algorithm for generating relevant and diverse quiz questions from uploaded documents."
    solution: "Utilized Large Language Models and fine-tuned the quiz generation process to ensure high-quality, context-appropriate questions."
  - title: "Handling Document Processing"
    description: "Efficiently processing and extracting information from uploaded PDF documents."
    solution: "Implemented a robust document processing pipeline using AWS S3 for storage and server-side parsing for content extraction."
results: "QuizQube successfully demonstrates the potential of AI-powered learning tools, offering users a personalized and interactive way to test and expand their knowledge based on their own materials."
links:
  - text: "Project Repository"
    url: "https://github.com/Eljakani/QuizQube"
    icon: "lucide:github"
  - text: "Live Demo"
    url: "https://quizqube.eljakani.me/"
    icon: "lucide:external-link"
---

# QuizQube: AI-Powered Quiz Platform

## Overview

QuizQube is an innovative AI-powered quiz platform designed to help users learn and test their knowledge by generating quizzes from uploaded documents. This project was developed as a side project to explore the capabilities of Next.js and to dive deeper into interactions with Large Language Models (LLMs).

### Key Components

1. **Document Upload**: Users can upload up to 3 PDF documents as the basis for quiz generation.
2. **AI-Powered Quiz Generation**: Utilizes LLMs to create relevant and challenging questions based on the uploaded content.
3. **Customizable Quiz Settings**: Users can adjust the number of questions, difficulty level, and quiz type to suit their learning needs.
4. **Interactive Quiz Experience**: Engaging interface for taking quizzes and reviewing results.
5. **User Authentication**: Personalized experiences with user accounts and saved settings.
6. **Cloud Storage**: AWS S3 integration for secure document storage and processing.

## Impact and Future Directions

QuizQube demonstrates the potential of AI in educational tools, offering a personalized and interactive learning experience. Future improvements could include support for more document types, advanced quiz generation algorithms, timed quizzes, leaderboards, and social sharing features.

The project has provided valuable experience in building full-stack applications with Next.js, working with external APIs and cloud services, integrating AI models, and creating responsive user interfaces. It serves as a foundation for further exploration into AI-assisted learning platforms and personalized education tools.
