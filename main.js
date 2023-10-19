const startPage = document.getElementById('main-page');
const quizPage = document.getElementById('quiz-page');
const quizForm = document.getElementById('quizForm');
const resultPage = document.getElementById('results-page');
const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const displayQuestion = document.getElementById('question');

const choiceButtons = document.getElementById('choice-buttons');

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
      { text: 'Targan' },
      { text: 'Bandle city' },
      { text: 'Ionia' },
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
  displayQuestion.innerHTML = questionNumber + '.  ' + currentQuestion.question;

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

  let selectedChampion = null;

  // Outer loop loops through each element in userResponse
  for (let i = 0; i < userResponse.length; i++) {
    let matchingScore = 0;
    let highestMatchingScore = 0;
    userChoice = userResponse[i];
    console.log(userChoice);
    // Inner loop through the champions object
    for (let j = 0; j < champData.length; j++) {
      //loop through champion data and return a champion
      const champion = champData[j];
      console.log(champData);
      //loop through champio
      for (const value of Object.values(champion)) {
        if (value == userChoice) {
          matchingScore++;
          console.log(matchingScore);
          if (matchingScore === 5) {
            selectedChampion = champion;
            matchingScore = highestMatchingScore;
            break;
          }
        }
      }
      if (selectedChampion) {
        break;
      }
    }
  }
  if (selectedChampion) {
    console.log(userResponse);
    console.log(`Selected champion is: ${selectedChampion.championName}`);
    console.log(selectedChampion);
  }
}
submitButton.addEventListener('click', processUserResponse);
