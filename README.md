# ATS Resume Analyzer

## Project Overview

ATS Resume Analyzer is a web-based application developed using HTML, CSS, and JavaScript. The system evaluates a candidate's resume against a selected job role and provides an ATS (Applicant Tracking System) compatibility score.

The project helps users understand how well their resume matches a particular designation by analyzing technical skills, resume sections, contact information, and overall resume quality.

---

## Features

### ATS Score Calculation

* Calculates resume relevance percentage.
* Displays overall ATS score.

### Skill Matching

* Compares resume skills with required skills for the selected designation.
* Shows matched skills.
* Shows missing skills.

### Contact Information Detection

* Detects:

  * Email Address
  * Phone Number
  * LinkedIn Profile
  * GitHub Profile

### Resume Section Analysis

Checks whether the resume contains:

* Education
* Skills
* Projects
* Experience
* Certifications
* Achievements

### Resume Statistics

* Total word count.
* Resume length evaluation.

### Resume Strength Analysis

Classifies resume as:

* Excellent
* Good
* Average
* Weak

### Hiring Recommendation

Provides recommendation such as:

* Highly Recommended
* Recommended
* Needs Improvement

### Recruiter Feedback

Generates personalized feedback based on:

* ATS score
* Missing skills
* Resume quality

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Development Tools

* Visual Studio Code / Notepad
* Google Chrome

---

## Supported Job Roles

* Software Engineer
* Web Developer
* Frontend Developer
* Backend Developer
* Full Stack Developer
* Data Analyst
* Data Scientist
* Machine Learning Engineer
* DevOps Engineer
* Cyber Security Analyst

---

## Project Structure

resume-analyzer/

├── index.html

├── style.css

├── script.js

├── resume.txt

└── README.md

---

## How to Run the Project

1. Download or create all project files.
2. Place all files in the same folder.
3. Open index.html in Google Chrome.
4. Select a target designation.
5. Upload a .txt resume file.
6. Click "Analyze Resume".
7. View the generated ATS report.

---

## ATS Scoring Logic

The application contains a predefined database of skills for each designation.

The system:

1. Reads the uploaded resume.
2. Extracts text content.
3. Compares resume content with required skills.
4. Calculates:

ATS Score =

(Number of Matched Skills / Total Required Skills) × 100

5. Generates recommendations and feedback.

---

## Future Enhancements

* PDF Resume Support
* DOCX Resume Support
* AI-Based Resume Analysis
* Resume Ranking System
* Keyword Optimization Suggestions
* Cloud Database Integration
* User Authentication
* Resume Comparison Feature

---

## Author

Developed as a mini-project for demonstrating ATS Resume Analysis using Frontend Web Technologies.
