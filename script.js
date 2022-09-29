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


function contentSubmit(event) {
  event.preventDefault();
  let dailyTask = $('input[name="content"]').val();
  content.append('<li>' + dailyTask + '</li>');
  $('input[name="content"]').val('');
}

scheduleBox.on('submit', contentSubmit);