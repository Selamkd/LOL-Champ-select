const startPage = document.getElementById('main-page');
const quizPage = document.getElementById('quiz-page');
const quizForm = document.getElementById('quizForm');
const resultPage = document.getElementById('results-page');
const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const displayQuestion = document.getElementById('question');

const choiceButtons = document.getElementById('choice-buttons');
console.log(choiceButtons);
let currentQuestionIndex = 0;
let userResponse = [];

// Store questions and choices in an object

const questionsAndChoices = [
  {
    question: 'Are you a lone wolf or a team player?',
    choices: [{ text: 'Lone wolf' }, { text: 'Team player' }],
  },
  {
    question:
      'Would you prefer an easy but safe character or a difficult character to master?',
    choices: [{ text: 'Easy' }, { text: 'Difficult' }],
  },
  {
    question: 'Which region interestes you most?',
    choices: [
      { text: 'Freljord' },
      { text: 'Piltover' },
      { text: 'Shurima' },
      { text: 'Noxus' },
      { text: 'Zaun' },
      { text: 'Targan' },
      { text: 'Bandle city' },
      { text: 'Lonia' },
    ],
  },
  {
    question: 'Which role do you want to play?',
    choices: [
      { text: 'Top' },
      { text: 'Jungle' },
      { text: 'Mid' },
      { text: 'Botlane' },
    ],
  },
  {
    question:
      'Do you prefer to keep enemies at range or get up close and personal ?',
    choices: [{ text: 'At range' }, { text: 'Close' }],
  },
];
startButton.addEventListener('click', () => {
  // Hide the Start Page
  startPage.style.display = 'none';

  // Show the Quiz Page
  quizPage.style.display = 'block';
  resultPage.style.display = 'none';
  // Call a function to load and display quiz questions
  runQuiz();
});

// write a function to load quiz questions and choices

function runQuiz() {
  let currentQuestion = questionsAndChoices[currentQuestionIndex];
  console.log(currentQuestion);
  //assign question number to each question
  let questionNumber = currentQuestionIndex + 1;

  //display question inside the 'question' h2 element
  displayQuestion.innerHTML = questionNumber + '. ' + currentQuestion.question;

  //set the choice buttons to empty to start with
  choiceButtons.innerHTML = '';

  //create buttons for each multiple choice options

  currentQuestion.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.classList.add('choice-btn');
    choiceButtons.appendChild(button);

    button.addEventListener('click', choiceSelected);
  });
  submitButton.disabled = true;
}

function choiceSelected(event) {
  const selectedChoice = event.target.textContent;

  //check if there are more questions and move to the next one
  if (currentQuestionIndex < questionsAndChoices.length) {
    currentQuestionIndex++;
    runQuiz();
    userResponse.push(selectedChoice);
  } else {
    submitButton.disabled = false;
    // quizPage.style.display = 'none';
    // resultPage.style.display = 'block';
  }
}
