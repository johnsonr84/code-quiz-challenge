const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector('.info_box')
const exit_btn = info_box.querySelector('.buttons .quit')
const continue_btn = info_box.querySelector('.buttons .restart')
const quiz_box = document.querySelector('.quiz_box')

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
}