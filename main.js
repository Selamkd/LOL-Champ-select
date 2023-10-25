const startPage = document.getElementById('main-page');
const quizPage = document.getElementById('quiz-page');
const quizForm = document.getElementById('quizForm');
const resultPage = document.getElementById('results-page');
const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const displayQuestion = document.getElementById('question');
const heroImg = document.getElementById('hero-img');
console.log(heroImg);

const choiceButtons = document.getElementById('choice-buttons');

setTimeout(() => {}, 1000);

let currentQuestionIndex = 0;
let userResponse = [];
let selectedChampion = null;

// Store questions and choices in an object

const questionsAndChoices = [
  {
    question: 'Are you a lone wolf or a team player?',
    choices: [{ text: 'Lone wolf' }, { text: 'Team player' }],
  },
  {
    question:
      'Would you prefer an easy but safe character or a difficult character to master?',
    choices: [{ text: 'Low' }, { text: 'High' }],
  },
  {
    question: 'Which region interestes you most?',
    choices: [
      { text: 'Freljord' },
      { text: 'Piltover' },
      { text: 'Shurima' },
      { text: 'Noxus' },
      { text: 'Zaun' },
      { text: 'Targon' },
      { text: 'Bandle city' },
      { text: 'Ionian Ocean' },
    ],
  },
  {
    question: 'Which role do you want to play?',
    choices: [
      { text: 'Top' },
      { text: 'Jungle' },
      { text: 'Middle' },
      { text: 'Botlane' },
      { text: 'Support' },
    ],
  },
  {
    question:
      'Do you prefer to keep enemies at range or get up close and personal ?',
    choices: [{ text: 'Ranged' }, { text: 'Melee' }],
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

  //assign question number to each question
  let questionNumber = currentQuestionIndex + 1;

  //display question inside the 'question' h2 element
  displayQuestion.innerHTML =
    questionNumber + '.   ' + currentQuestion.question;

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
  userResponse.push(selectedChoice);

  //check if there are more questions and move to the next one
  if (currentQuestionIndex < questionsAndChoices.length - 1) {
    currentQuestionIndex++;
    runQuiz();
  } else {
    submitButton.disabled = false;
    // quizPage.style.display = 'none';
    // resultPage.style.display = 'block';
  }
  console.log(userResponse);
}

async function processUserResponse() {
  const response = await fetch(
    'https://champ-select-a6f686d9438e.herokuapp.com/'
  );
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    console.error('Data not available');
    return;
  }

  const champData = await response.json();
  console.log(champData);

  // write a function to calculate the similarity score between a champion's values and user's response
  function calculateSimilarity(champ, userResponse) {
    // assign a score to each property
    const score =
      (champ.playStyle === userResponse[0] ? 1 : 0) +
      (champ.difficulty === userResponse[1] ? 1 : 0) +
      (champ.region === userResponse[2] ? 1 : 0) +
      (champ.role === userResponse[3] ? 1 : 0) +
      (champ.range === userResponse[4] ? 1 : 0);
    console.log(score);
    return score;
  }
  // calculate the score for each champion
  const championsScored = champData.map((champ) => {
    return {
      champion: champ,
      score: calculateSimilarity(champ, userResponse),
    };
  });
  console.log(championsScored);
  // sort champions by their score.. descending
  championsScored.sort((a, b) => b.score - a.score);

  // return champion with the highest score in a variable
  const highScoreChamp = championsScored[0];
  console.log('The closest match is:', highScoreChamp);
}
submitButton.addEventListener('click', processUserResponse);
