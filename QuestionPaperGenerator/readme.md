
# Question Paper Generator

This Node.js application generates a question paper based on a set of sample questions stored in a Question Store. The generated question paper adheres to specified difficulty distribution and total marks.

## Getting Started

Follow these steps to set up and run the Question Paper Generator:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/divyanshu2003singh/Reelo_backend_Assignment.git
Navigate to the project folder:

copy this these commands in your terminal step by step:

cd QuestionPaperGenerator

To Install dependencies:

npm install

To start the server:

node app.js

The server will run on http://localhost:3000.

Use a tool like Postman to send a POST request to generate a question paper. Example payload:

json

{
  "totalMarks": 100,
  "difficultyDistribution": {
    "easy": 20,
    "medium": 50,
    "hard": 30
  }
}
Endpoint: http://localhost:3000/generateQuestionPaper

View the generated question paper in the response.

Sample Data
The sample questions are stored in the questionStore.js file. You can customize this file by adding more questions to make the question store diverse.


