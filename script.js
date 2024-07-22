const quizdata = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];
const question = document.querySelector(".question");
const options = document.querySelectorAll(".options");
const submit_answer = document.querySelector(".submit-btn");
const resetquiz = document.querySelector(".reset-btn");
const show_answer = document.querySelector(".show-answer");

let index = 0;
let correct_answer = 0,
  incorrect_answer = 0;
let total = quizdata.length;
const loadquiz = () => {
  if (total === index) {
    return end_quiz();
  }
  let questiondata = quizdata[index];
  question.innerText = `${index + 1}) ${questiondata.question}`;
  //   options[0].nextElementSibling.innerText = questiondata.a;
  //   options[1].nextElementSibling.innerText = questiondata.b;
  //   options[2].nextElementSibling.innerText = questiondata.c;
  //   options[3].nextElementSibling.innerText = questiondata.d;
  for (let i = 0; i < options.length; i++) {
    options[i].nextElementSibling.innerText =
      questiondata[Object.keys(questiondata)[i + 1]];
  }
  show_answer.classList.add("hide");
};

submit_answer.addEventListener("click", () => {
  let questiondata = quizdata[index];
  let check_answer = getanswer();
  if (check_answer === questiondata.correct) {
    correct_answer++;
  } else {
    incorrect_answer++;
  }
  index++;
  loadquiz();
  reset();
});

const getanswer = () => {
  let ans;
  options.forEach((option) => {
    if (option.checked) {
      ans = option.value;
    }
  });
  return ans;
};

const reset = () => {
  options.forEach((option) => {
    option.checked = false;
  });
};

const end_quiz = () => {
  show_answer.classList.remove("hide");
  if (correct_answer == 0) {
    show_answer.innerText = `Please try again! you've scored ${correct_answer} / ${total} `;
  } else {
    show_answer.innerText = `Congratulations you've scored ${correct_answer} / ${total} `;
  }
};
resetquiz.addEventListener("click", () => {
  index = 0;
  correct_answer = 0;
  incorrect_answer = 0;
  loadquiz();
});
loadquiz();
