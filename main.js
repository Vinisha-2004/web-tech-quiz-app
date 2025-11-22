var ArrayQuiz = [
  {
    "question": "Which method is used to add an element at the end of an array?",
    "options1": "push()",
    "options2": "pop()", 
    "options3": "shift()",
    "options4": "unshift()",
    "answer": "push()"
  },
  {
    "question": "Which method removes the first element from an array?",
    "options1":"shift()", 
    "options2":"slice()",
    "options3":"splice()",
    "options4":"pop()",
    "answer": "shift()"
  },
  {
    "question": "What is the output of typeof []?",
    "options1": "'array'",
    "options2": "'object'", 
    "options3": "'list'",
    "options4": "'undefined'",
    "answer": "'object'"
  },
  {
    "question": "Which method creates a new array without changing the original array?",
    "options1": "splice()", 
    "options2": "slice()", 
    "options3": "push()", 
    "options4": "pop()",
    "answer": "slice()"
  },
  {
    "question": "What is the output of the following code?\n\nlet arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);",
    "options1": "3",
    "options2": "4",
    "options3": "5", 
    "options4": "Error",
    "answer": "4"
  },
  {
    "question": "Which method is used to merge two arrays?",
    "options1": "concat()",
    "options2": "combine()",
    "options3": "merge()",
    "options4": "join()",
    "answer": "concat()"
  },
  {
    "question": "What does the splice() method do?",
    "options1": "Removes elements and returns a new array",
    "options2": "Adds or removes elements from the original array",
    "options3": "Returns a shallow copy of part of the array",
    "options4": "Joins all elements into a string",
    "answer": "Adds or removes elements from the original array"
  },
  {
    "question": "What will be the value of arr.length?\n\nlet arr = [2, 4, 6];\narr[5] = 10;\nconsole.log(arr.length);",
    "options1": "3",
    "options2": "4",
    "options3": "6",
    "options4": "10",
    "answer": "6"
  }
];

let questions = document.querySelector(".ques");
let option1 = document.querySelector("#btn1");
let option2 = document.querySelector("#btn2");
let option3 = document.querySelector("#btn3");
let option4 = document.querySelector("#btn4");
let nextbtn = document.querySelector("#next-btn");
let resultBox = document.querySelector(".result-box");

let currQuestion = 0;
let totalQuestion = ArrayQuiz.length;
let score = 0;
let allButtons = [option1, option2, option3, option4];
let isAnswered = false;  // NEW — to prevent skipping without answering

function loadQuestion(index) {
  // Reset for new question
  allButtons.forEach(btn => {
    btn.style.backgroundColor = "";
    btn.disabled = false;
  });

  isAnswered = false;

  let data = ArrayQuiz[index];
  questions.textContent = (index + 1) + ". " + data.question;

  option1.textContent = data.options1;
  option2.textContent = data.options2;
  option3.textContent = data.options3;
  option4.textContent = data.options4;
}

function checkAnswer(selectedBtn) {
  let correctAnswer = ArrayQuiz[currQuestion].answer;
  let userAnswer = selectedBtn.textContent.trim();

  isAnswered = true; // User answered

  if (userAnswer === correctAnswer) {
    selectedBtn.style.backgroundColor = "green";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "red";

    // Highlight correct answer
    allButtons.forEach(btn => {
      if (btn.textContent.trim() === correctAnswer) {
        btn.style.backgroundColor = "green";
      }
    });
  }

  // Disable all options after answer
  allButtons.forEach(btn => btn.disabled = true);
}

function loadNextQuestion() {
  if (!isAnswered) {
    alert("Please select an answer before going to next question.");
    return;
  }

  currQuestion++;

  if (currQuestion >= totalQuestion) {
    showResult();
    return;
  }

  loadQuestion(currQuestion);
}

function showResult() {
  document.querySelector(".outer").style.display = "none";

  resultBox.style.display = "block";

  resultBox.innerHTML = `
    <h2  style="margin-top:15px;color:green; text-transformation:capitalize;" > Quiz Completed!</h2>
    
    <p  style="margin-top:15px;" >Your Score: <strong>${score} / ${totalQuestion}</strong></p>

    <button onclick="location.reload()" 
      style="margin-top:15px;padding:10px 20px;background:#007bff;color:#fff;border:none;border-radius:8px;">
      Restart Quiz
    </button>
  `;
  
}

// Event Listeners
allButtons.forEach(btn => btn.addEventListener("click", () => checkAnswer(btn)));
nextbtn.addEventListener("click", loadNextQuestion);

// Load the first question
loadQuestion(currQuestion);
