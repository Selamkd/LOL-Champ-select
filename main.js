const startPage = document.getElementById("main-page");
const quizPage = document.getElementById("quiz-page");
const quizForm = document.getElementById("quizForm")
const resultPage = document.getElementById("results-page");
const startButton = document.getElementById("start-button");
const submitButton = document.getElementById("submit-button")
const goBackButton = document.getElementById("startover-button")
// quiz questions and choices 

const questionsAndChoices = [
    {
        question: "Are you a lone wolf or a team player?",
        choices:[
            {text: "Lone wolf"},
            {text: "Team player"}
        ]
    },{
        question:"Would you prefer an easy but safe character or a difficult charachter to master?",
        choices:[
            {text: "Easy"},
            {text: "Difficult"}
        ]
    },
    {
        question:"Which region interestes you most?",
        choices:[
            {text: "Freljord"},
            {text: "Piltover"},
            {text: "Shurima"},
            {text: "Noxus"},
            {text: "Zaun"},
            {text: "Targan"},
            {text: "Bandle city"},
            {text: "Lonia"}
        
        ]
    },
    {
        question:"Which role do you want to play?",
        choices:[
            {text: "Top"},
            {text: "Jungle"},
            {text: "Mid"},
            {text: "Botlane"}
        
        ]
    },
    {
        question:"Do you prefer to keep enemies at range or get up close and personal ?",
        choices:[
            {text: "At range"},
            {text: "Close"},
        
        ]
    },

]
// console.log(questionsAndChoices[3].choices[2]);




// on click change pages

startButton.addEventListener("click", ()=>{
    startPage.style.display = "none";
    quizPage.style.display = "block";

    // call a function that displays the quiz container with questions and choices 
    generateQuiz()
  
})



const displayQuestion = document.getElementById("question");
const choiceButtons = document.getElementById("choice-buttons");

let currentQuestionIndex = 0; 
let userResponse = [];

//display questions
 function generateQuiz () {
    let currentQuestion = questionsAndChoices[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    displayQuestion.innerHTML = questionNo +  ". " +  currentQuestion.question;

    //clear all buttons
    choiceButtons.innerHTML = '';
    //display choices

    currentQuestion.choices.forEach(choice =>{
        const button = document.createElement("button");
        button.innerHTML = choice.text;
        button.classList.add("choice-btn");
        choiceButtons.appendChild(button);

        button.addEventListener("click", choiceSelected)
    })
}
 function choiceSelected (event){
    
    const selectedChoice = event.target.textContent;

    //check if there are more questions and move to the next one
    if(currentQuestionIndex < questionsAndChoices.length - 1){
        currentQuestionIndex++;
      generateQuiz()
      userResponse.push(selectedChoice);
   
    }else{
        startPage.style.display = "none";
        quizPage.style.display = "none";
        resultPage.style.display = "block"
    }
   
 }








