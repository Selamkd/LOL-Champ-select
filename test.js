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
