const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector('.info_box')
const exit_btn = info_box.querySelector('.buttons .quit')
const continue_btn = info_box.querySelector('.buttons .restart')
const quiz_box = document.querySelector('.quiz_box')
const option_list = document.querySelector(".option_list");

// Start Button
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //shows the info box
}

// Exit Button
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // hides the info box
}

// Continue Button
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // hides the info box
  quiz_box.classList.add("activeQuiz"); // show quiz box
  showQuestions(0);
  queCounter(1);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

// If next button is clicked
next_btn.onclick = () => {
  if(que_count < questions.length - 1) {
    que_count++;
    que_numb++;
  showQuestions(que_count);
  queCounter(que_numb);
  }else {
    console.log("Questions Completed")
  }
}

// Questions from options array 
function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  
  let que_tag = '<span>'+ questions[index].numb + ") " + questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                   + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                   + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                   + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option")
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if(userAns == correctAns) {
    answer.classList.add("correct");
    console.log("Correct");
  }else {
    answer.classList.add("incorrect");
    console.log("Incorrect");
  }
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled")
  }
}

function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que")
  let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}

