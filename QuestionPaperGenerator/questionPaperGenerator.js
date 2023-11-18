
const generateQuestionPaper = (totalMarks, difficultyDistribution) => {
    // Gets questions from the question store
    const questions = require('./questionStore');
  
    // Calculates the number of questions based on difficulty distribution
    const numEasy = Math.floor(difficultyDistribution.easy * totalMarks / 100);
    const numMedium = Math.floor(difficultyDistribution.medium * totalMarks / 100);
    const numHard = totalMarks - numEasy - numMedium;
  
    // Filters questions based on difficulty
    const easyQuestions = questions.filter(q => q.difficulty === 'Easy').slice(0, numEasy);
    const mediumQuestions = questions.filter(q => q.difficulty === 'Medium').slice(0, numMedium);
    const hardQuestions = questions.filter(q => q.difficulty === 'Hard').slice(0, numHard);
  
    // Concatenates questions to create the question paper
    const questionPaper = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
  
    return questionPaper;
  };
  
  module.exports = generateQuestionPaper;
  