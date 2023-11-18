const express = require('express');
const bodyParser = require('body-parser');
const generateQuestionPaper = require('./questionPaperGenerator');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/generateQuestionPaper', (req, res) => {
  try {
    const { totalMarks, difficultyDistribution } = req.body;
    const questionPaper = generateQuestionPaper(totalMarks, difficultyDistribution);
    res.json(questionPaper);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
