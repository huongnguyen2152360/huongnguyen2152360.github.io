const items = [
    {
        question: "What is gephyrophobia?",
        answers: {
            a: "Fear of old people",
            b: "Fear of bridges",
            c: "Fear of food",
            d: "Fear of height"
        },
        correctAnswer: "Fear of bridges"
    },
    {
        question: "Fear of zombies?",
        answers: {
            a: "Trypophobia",
            b: "Pediophobia",
            c: "Kinemortophobia",
            d: "Omphalophobia"
        },
        correctAnswer: "Kinemortophobia"
    },
    {
        question: "What is the term for 'fear of dolls'?",
        answers: {
            a: "Ophidiophobia",
            b: "Pediophobia",
            c: "Trypophobia",
            d: "Acrophobia"
        },
        correctAnswer: "Pediophobia"
    },
    {
        question: "Fear of clowns?",
        answers: {
            a: "Omphalophobia",
            b: "Coulrophobia",
            c: "Ephebiphobia",
            d: "Dendrophobia"
        },
        correctAnswer: "Coulrophobia"
    },
    {
        question: "What is geminiphobia?",
        answers: {
            a: "Fear of swimming",
            b: "Fear of balloons",
            c: "Fear of twins",
            d: "Fear of kids"
        },
        correctAnswer: "Fear of twins"
    }
];
var questionContainer = document.getElementById("questionContainer");
var answerNo1 = document.getElementById("answer1");
var answerNo2 = document.getElementById("answer2");
var answerNo3 = document.getElementById("answer3");
var answerNo4 = document.getElementById("answer4");
var showFailResult = document.getElementById("showFailResult");
var a = document.querySelector(".showFailResult");
var content = document.querySelector(".content");

questionContainer.innerText = items[0].question;
answerNo1.innerText = items[0].answers.a;
answerNo2.innerText = items[0].answers.b;
answerNo3.innerText = items[0].answers.c;
answerNo4.innerText = items[0].answers.d;
var numberQuestion = 0;
var allAnswers = [];
var numberAnswer = 0;
var results = 0;
function ansBtn(n) {
        allAnswers.push(n.innerText);
        console.log(allAnswers);
        numberQuestion+=1;
        if (numberQuestion > 4) {
            for (var numberAnswer = 0; numberAnswer < allAnswers.length; numberAnswer++) {
                if (allAnswers[numberAnswer] == items[numberAnswer].correctAnswer) {
                    results += 1;
                }
                else {results = results}
            }
            content.style.opacity = "0";
            content.style.visibility = "hidden";
            a.style.opacity = "1";
            a.style.visibility = "visible";
            return showFailResult.innerText = results + "/5.";
        }
        questionContainer.innerText = items[numberQuestion].question;
        answerNo1.innerText = items[numberQuestion].answers.a;
        answerNo2.innerText = items[numberQuestion].answers.b;
        answerNo3.innerText = items[numberQuestion].answers.c;
        answerNo4.innerText = items[numberQuestion].answers.d;
}