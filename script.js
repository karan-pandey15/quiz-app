const quizDb = [
{
    question:"What i love most in you ?",
    a : "Your Behaviour",
    b : "adfdf",
    c : "KAFE KARNA OANDEY AFRER  RE",
    d : "hyper text mix language",
    ans: "ans1"
},
{
    question:"What is the full form of CSS ?",
    a : "cascading style sheet",
    b : "cas style sheet ",
    c : "KAFE KARNA OANDEY AFRER  RE",
    d : "color sheet style",
    ans: "ans1"
},
{
    question:"What is the full form of JS ?",
    a : "JAVA style",
    b : "java script",
    c : "KAFE KARNA OANDEY AFRER  RE",
    d : "hyper text mix language",
    ans: "ans2"
},
{
    question:"What i love most in you ?",
    a : "Your Behaviour",
    b : "adfdf",
    c : "KAFE KARNA OANDEY AFRER  RE",
    d : "hyper text mix language",
    ans: "ans1"
},
{
    question:"What is the full form of CSS ?",
    a : "cascading style sheet",
    b : "cas style sheet ",
    c : "KAFE KARNA OANDEY AFRER  RE",
    d : "color sheet style",
    ans: "ans1"
},
{
    question:"What is the full form of JS ?",
    a : "JAVA style",
    b : "java script",
    c : "KAFE KARNA OANDEY AFRER  RE",
    d : "hyper text mix language",
    ans: "ans2"
},



]

const question = document.querySelector(".question")
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit  = document.getElementById("submit")

const answers = document.querySelectorAll(".answer");
const showScore = document.getElementById("showScore");


    

let questionCount = 0;
let score = 0;

const loadquestion= ()=>{
    const questionList = quizDb[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

    console.log(question.innerHTML = questionList.question);    
    console.log(option4.innerHTML = questionList.d);

}

loadquestion();

function getCheckAnswer(){
    let answer;

    answers.forEach( (curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer
}

function deSelectAll(){
    answers.forEach( (curAnsElem)=>{
        curAnsElem.checked = false;
    })
}

submit.addEventListener("click",()=>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer === quizDb[questionCount].ans){
        score++;
        console.log(score)
    }

    questionCount++;

    deSelectAll();
     
    if(questionCount<quizDb.length){
        loadquestion();
    }
    else{
        showScore.innerHTML = `<h2>your score ${quizDb.length} /${score} 
        </h2>
        <button class="btn2" onclick="location.reload()">Play again</button>`
    }
});



