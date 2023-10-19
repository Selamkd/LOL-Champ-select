// console.log(questionsAndChoices[3].choices[2]);

// add an event handler to switch from start page and display questions

//add an event handler to handle user response

// ...

// Display questions

// add event listener on click takes you to quiz page

//display questions

//  function choiceSelected (event){

//     const selectedChoice = event.target.textContent;

//     //check if there are more questions and move to the next one
//     if(currentQuestionIndex < questionsAndChoices.length){
//         currentQuestionIndex++;
//       generateQuiz()
//       userResponse.push(selectedChoice);

//     }else{
//         quizPage.style.display = "none";
//         resultPage.style.display = "block";
//     }

//  }

// on click change pages

startButton.addEventListener('click', () => {
  if (currentQuestionIndex < questionsAndChoices.length) {
    startPage.style.display = 'none';
    quizPage.style.display = 'block';

    // call a function that displays the quiz container with questions and choices
    generateQuiz();
  }
});

const displayQuestion = document.getElementById('question');
const choiceButtons = document.getElementById('choice-buttons');

let currentQuestionIndex = 0;
let userResponse = [];

//display questions
function generateQuiz() {
  let currentQuestion = questionsAndChoices[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  displayQuestion.innerHTML = questionNo + '. ' + currentQuestion.question;

  //clear all buttons
  choiceButtons.innerHTML = '';
  //display choices

  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.innerHTML = choice.text;
    button.classList.add('choice-btn');
    choiceButtons.appendChild(button);

    button.addEventListener('click', choiceSelected);
  });
}
function choiceSelected(event) {
  const selectedChoice = event.target.textContent;

  //check if there are more questions and move to the next one
  if (currentQuestionIndex < questionsAndChoices.length) {
    currentQuestionIndex++;
    generateQuiz();
    userResponse.push(selectedChoice);
  } else {
    quizPage.style.display = 'none';
    resultPage.style.display = 'block';
  }
}
function processAndDisplay() {
  fetch;
}

for (let i = 0; i < questionsAndChoices.length; i++) {
  if (i < userResponse.length) {
    //get user's choice
    const userChoice = userResponse[i];
    //champion with the matching value
    const championValue = championObject;

    //if user choice and champion value match increment matching score
    if (userChoice === championValue) {
      matchingScore++;
    }
    if (matchingScore > totalMatchingScore) {
      totalMatchingScore = matchingScore;
      selectedChampion = championObject;
    }
  }

  if (selectedChampion) {
    console.log(
      `The champion selected is ${selectedChampion.championName} with a score of ${totalMatchingScore}`
    );
  }

  //for each champion in champdata
  for (const champion in champData) {
    // access the data for each champion
    const championObject = champData[champion];
    // set matching score to 0 to start with no matches
    let matchingScore = 0;
    //for each response in the user response array
    for (let i = 0; i < userResponse.length; i++) {
      const userChoice = userResponse[i];
      if (championObject.keys.includes(userChoice)) {
        matchingScore++;
      }
      console.log(matchingScore);
    }
  }
}

let selectedChampion = null;
let totalMatchingScore = -1;
for (const champion in champData) {
  const championObject = champData[champion.championName];
  console.log(championObject);
  let matchingScore = 0;

  for (let i = 0; i < userResponse.length; i++) {
    const userChoice = userResponse[i];
    // const championValue = championObject[questionsAndChoices[i].question];

    if (userChoice.includes(object.values(champData))) {
      matchingScore++;
    }
  }

  if (matchingScore > totalMatchingScore) {
    totalMatchingScore = matchingScore;
    selectedChampion = championObject;
  }
}

if (selectedChampion) {
  console.log(
    `The champion selected is ${selectedChampion.championName} with a score of ${totalMatchingScore}`
  );
}
for (const value of Object.values(champion)) {
  if (
    champion.role === userResponse[3] &&
    champion.playStyle === userResponse[0] &&
    champion.range === userResponse[4] &&
    champion.region === userResponse[2] &&
    champion.difficulty === userResponse[1]
  ) {
    matchingScore++;
    console.log(matchingScore);
  } else {
    console.log('No champion meets all 5');
  }
  if (matchingScore === 5) {
    highestMatchingScore = matchingScore;
    selectedChampion = champion;
    break;
  }
}
