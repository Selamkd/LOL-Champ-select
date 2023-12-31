const startPage = document.getElementById('start-page');
const quizPage = document.getElementById('quiz-page');
// const quizForm = document.getElementById('quizForm');
const resultPage = document.getElementById('last-page');
const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const displayQuestion = document.getElementById('question');
const champName = document.getElementById('champ-name');
const champAbilities = document.getElementById('abilities');
const champUltimate = document.getElementById('ultimate');
const champRegion = document.getElementById('region');
const champLore = document.getElementById('lore');
const champImage = document.getElementById('champ-img');
const heroCard = document.querySelector('.card');
const cardBack = document.querySelector('.card-back');
const champCard = document.getElementById('champion-card');
const choiceButtons = document.getElementById('choice-buttons');

setTimeout(() => {
  if (window.innerWidth > 1000) {
    heroCard.style.display = 'none';
    cardBack.style.display = 'block';

    setTimeout(() => {
      heroCard.style.display = 'block';
      cardBack.style.display = 'none';
    }, 5000);
  }
}, 5000);

champCard.addEventListener('mouseover', (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 10;

  champCard.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

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
      { text: 'Ionia' },
      { text: 'Demacia' },
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
  quizPage.style.display = 'flex';
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
  }
  console.log(userResponse);
}

async function processUserResponse() {
  // Fetch champion data from  API
  const response = await fetch('https://champ-select.onrender.com/champions');
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    console.error('Data not available');
    return;
  }

  const champData = await response.json();
  const champArray = champData.data;
  console.log(champArray);

  // Write a function to calculate the similarity score between a champion's values and user's response
  function calculateSimilarity(champ, userResponse) {
    // Assign a score to each property
    const score =
      (champ.playStyle === userResponse[0] ? 1 : 0) +
      (champ.difficulty === userResponse[1] ? 1 : 0) +
      (champ.region === userResponse[2] ? 1 : 0) +
      (champ.role === userResponse[3] ? 1 : 0) +
      (champ.range === userResponse[4] ? 1 : 0);
    console.log(score);
    return score;
  }

  // Calculate the score for each champion
  const championsScored = champArray.map((champ) => {
    return {
      champion: champ,
      score: calculateSimilarity(champ, userResponse),
    };
  });

  // Sort champions by their score
  championsScored.sort((a, b) => b.score - a.score);

  // Return the champion with the highest score in a variable
  const highScoreChamp = championsScored[0];
  console.log(highScoreChamp);

  // img icon for each champion
  const championIcon = {
    'Ahri': './Champ-icons/ahri.png',
    'Amumu': './Champ-icons/amumu.png',
    'Ashe': './Champ-icons/ashe.png',
    'Aurelion Sol': './Champ-icons/Aurelion sol.jpeg',
    'Bard': './Champ-icons/bard.png',
    'Blitzcrank': './Champ-icons/blitzcrank.png',
    'Briar': './Champ-icons/briar.png',
    'Darius': './Champ-icons/darius.png',
    'Ezreal': './Champ-icons/ezreal.jpeg',
    'Graves': './Champ-icons/graves.png',
    'Kennen': './Champ-icons/kennen.png',
    'Malzahar': './Champ-icons/malzahar.webp',
    'Nami': './Champ-icons/nami.png',
    'Nasus': './Champ-icons/nasus.png',
    'Olad': './Champ-icons/olaf.png',
    'Ornn': './Champ-icons/ornn.png',
    'Orianna': './Champ-icons/orianna.jpeg',
    'Pantheon': './Champ-icons/pantheon.png',
    'Pyke': './Champ-icons/pyke.webp',
    'Rammus': './Champ-icons/rammus.webp',
    'Rell': './Champ-icons/rell.jpeg',
    'Rakan': './Champ-icons/rakan.jpeg',
    'Shyvana': './Champ-icons/shyvana.webp',
    'Samira': './Champ-icons/samira.jpeg',
    'Sylas': './Champ-icons/sylas.webp',
    'Teemo': './Champ-icons/Teemo.jpeg',
    'Vayne': './Champ-icons/vayne.webp',
    'Yuumi': './Champ-icons/Yuumi.jpeg',
  };
  const selectedChampion = highScoreChamp.champion.championName;
  const matchingIcon = championIcon[selectedChampion];
  console.log(matchingIcon);
  if (matchingIcon) {
    champImage.src = matchingIcon;
  } else {
    console.error('Image not found for the selected champion.');
  }
  champName.textContent = highScoreChamp.champion.championName;
  champAbilities.innerHTML = `<span class="card-span">Abilities: </span> ${highScoreChamp.champion.abilities.join(
    ', '
  )}`;
  champUltimate.innerHTML = `<span class="card-span">Ultimate Ability: </span> ${highScoreChamp.champion.ulitimateAbility}`;
  champRegion.innerHTML = `<span class="card-span">Region: </span> ${highScoreChamp.champion.region}`;
  champLore.innerHTML = `<span class="card-span">Lore: </span> ${highScoreChamp.champion.lore}`;
}

submitButton.addEventListener('click', () => {
  quizPage.style.display = 'none';
  resultPage.style.display = 'flex';
  processUserResponse();
});
