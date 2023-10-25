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

const result = champData.filter((item) => {
  return (
    item.name.toLowerCase().includes(userChoice) || // Compare with name
    item.age.toString().includes(userInput) // Compare with age
  );
});

if (result.length > 0) {
  // Display matching results
  console.log('Matching results:', result);
} else {
  // No matching results
  console.log('No matching results.');
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

  let selectedChampion = null;

  // // Outer loop loops through each element in userResponse
  // for (let i = 0; i < userResponse.length; i++) {
  //   let matchingScore = 0;
  //   let highestMatchingScore = 0;
  //   userChoice = userResponse[i];
  //   console.log(userChoice);
  //   // Inner loop through the champions object
  //   for (let j = 0; j < champData.length; j++) {
  //     //loop through champion data and return a champion
  //     const champion = champData[j];
  //     console.log(champion);
  //     console.log(champData);
  //     //loop through champion data
  //     for (const value of Object.values(champion)) {
  //       if (value == userChoice) {
  //         matchingScore++;
  //         // replace matching score and push to a new array/ object
  //         console.log(matchingScore);
  //         // add a logic
  //         if (matchingScore === 5) {
  //           selectedChampion = champion;
  //           matchingScore = highestMatchingScore;
  //           break;
  //         }
  //       }
  //     }
  //     if (selectedChampion) {
  //       break;
  //     }
  //   }
  // }
  // if (selectedChampion) {
  //   console.log(userResponse);
  //   console.log(`Selected champion is: ${selectedChampion.championName}`);
  //   console.log(selectedChampion);
  // }

  // submitButton.addEventListener('click', processUserResponse);
}
import * as bottlesModel from './bottles/model.js';

export async function getAllBottles(req, res) {
  const bottles = await bottlesModel.getAllBottles();

  res.status(200).json({
    success: true,
    payload: messages,
  });
}
export async function createBottle(req, res) {
  const inputUndefined =
    req.body.messages === undefined || req.body.timestamp === undefined;

  if (inputUndefined) {
    res.status(400).json({
      success: false,
      error: "Please provide a 'message' and 'timestamp",
    });
    return;
  }

  const createdBottle = await bottlesModel.createBottle({
    message: req.body.message,
  });
  res.status(201).json({
    success: true,
    payload: createdBottle,
  });
}

export async function deleteBottleById(req, res) {
  const bottleId = req.params.id;
  const deleted = await bottlesModel.deleteBottleById(bottleId);
  if (!deleted) {
    res.status(404).json({
      success: false,
      error: `No message with the id ${bottleId} found`,
    });
    return;
  }
  res.status(200).json({
    success: true,
    payload: deleted,
  });
}
