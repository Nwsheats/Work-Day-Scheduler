console.log()

let dateToday = moment();
$("#currentDay").text(dateToday.format("MMM Do, YYYY"));

let scheduleBox = $('#schedule');
let content = $('#content');
let nineAM = $('#9');
let tenAM = $('#10');
let elevenAM = $('#11');
let noon = $('#12');
let onePM = $('#13');
let twoPM = $('#14');
let threePM = $('#15');
let fourPM = $('#16');
let fivePM = $('#17');

addEventListener('load', (event) => {
  let currentTime = moment();
  let storedTask = JSON.parse(localStorage.getItem("stored-task"))
  content.textContent = storedTask;
  // if ()
  // content.addClass("bg-danger")
  // content.addClass("bg-success")

});


function contentSubmit(event) {
  event.preventDefault();
  let dailyTask = $('input[name="content"]').val();
  content.append('<li>' + dailyTask + '</li>');
  $('input[name="content"]').val('');
  localStorage.setItem("stored-task", JSON.stringify(dailyTask));
}


scheduleBox.on('submit', contentSubmit);