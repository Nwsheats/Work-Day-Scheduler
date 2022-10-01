const dateToday = moment();
$("#currentDay").text(dateToday.format("MMM Do, YYYY"));

const timeBlock = $('.row');

const currentHour = moment().hours()

const inputTasks = JSON.parse(localStorage.getItem("stored-tasks")) || ['', '', '', '', '', '', '', '', ''];

timeBlock.each(function (index, element) {
  console.log(index, element.id)
  const actualNum = parseInt(element.id)
  const content = element.querySelector(".col-9")
  if (currentHour > actualNum) {
    content.classList.add("past");
  } else if (currentHour < actualNum) {
    content.classList.add("future");
  } else {
    content.classList.add("present");
  }
  element.addEventListener('submit', contentSubmit)
  content.value = inputTasks[index];
});


function contentSubmit(event) {
  event.preventDefault();
  const element = event.target
  const index = parseInt(element.id) - 9;
  const dailyTask = element.querySelector(".col-9").value
  inputTasks[index] = dailyTask;
  localStorage.setItem("stored-tasks", JSON.stringify(inputTasks));
}
