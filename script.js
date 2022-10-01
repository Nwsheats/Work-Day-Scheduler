// a variable to show the current date at the top of the page

const dateToday = moment();
$("#currentDay").text(dateToday.format("MMM Do, YYYY"));

// a variable getting the class 'row'

const timeBlock = $('.row');

// a variable to get the current moment in hours

const currentHour = moment().hours()

// originally an array of empty strings for the Local Storage to write into, but I added an or statement
// for the Local Storage getItem. This would mean that inputTasks is either the 'stored-tasks' for storage
// or all empty strings.

const inputTasks = JSON.parse(localStorage.getItem("stored-tasks")) || ['', '', '', '', '', '', '', '', ''];

// an each function that essentially grabs each time block, which is an input, parses the input id (numbers 9-17) into
// a const, defines a query-selector to the input class, then uses logic so that if the currentHour above is
// greater than, less, than, or equal to the element id, a different css value is added as a class to the input class to change the
// colors.

// Additionally, I put the contentSubmit function Event listener in here, as inputTasks needs to be put in the content
// fields right away.

timeBlock.each(function (index, element) {
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

// a function for submitting content using inputs.
// event.target is defined as element so I could use similar code as above.
// ParseInt subtracts by 9 so that the 9-17 values can start at 0 as part of the index
// additionally the local Storage set item is here.

function contentSubmit(event) {
  event.preventDefault();
  const element = event.target
  const index = parseInt(element.id) - 9;
  const dailyTask = element.querySelector(".col-9").value
  inputTasks[index] = dailyTask;
  localStorage.setItem("stored-tasks", JSON.stringify(inputTasks));
}
