const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("Candidate Name:");


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ["Sally Ride"];
let candidateAnswer = [""] ;
let questions = ["True or false: 5 kilometer == 5000 meters? "];
let correctAnswers = ["True"];
let candidateAnswers = (" ");
let question3 = ["(5 + 3)/2 * 10 = ? "];
let correctAnswer1 = ["40"];
let candidateAnswer1 = ("");
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let correctAnswer2 = ["Trajectory"];
let candidateAnswer2 = (""); 
let question5 = ["What is the minimum crew size for the ISS? "];
let correctAnswer3 = ["3"];
let candidateAnswer3 = ("");


function askForName() {
 
console.log(" Hello," + candidateName + "!");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
input.question(question);
console.log("Candidate Answer:" + candidateAnswer);

input.question(questions);
console.log("Candidate Answer:" + candidateAnswers)

input.question(question3);
console.log("Candidate Answer:" + candidateAnswer1)

input.question(question4);
console.log("Candidate Answer:" + candidateAnswer2)

input.question(question5);
console.log("Candidate Answer:" + candidateAnswer3)

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};