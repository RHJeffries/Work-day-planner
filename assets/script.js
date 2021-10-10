var plan9am = $("#9");
var plan10am = $("#10");
var plan11am = $("#11");
var plan12pm = $("#12");
var plan1pm = $("#13");
var plan2pm = $("#14");
var plan3pm = $("#15");
var plan4pm = $("#16");
var plan5pm = $("#17");


//display current day
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));

var timeNow = moment();
console.log(timeNow);
var hour = parseInt(timeNow.format("H"));
console.log(hour);


function colorTime() {
  $(".time-block").each(function () {
    var plannedTime = parseInt($(this).attr("id"));
    if (plannedTime > hour) {
      $(this).addClass("future")
    } else if (plannedTime === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  })
}

colorTime();
// interval for the colour coding to be updated every 5mins, it doesn't require a page refresh 
setInterval(colorTime, 300000);

$(".saveBtn").click(function () {
  localStorage.setItem("9am", (plan9am.val()))
  localStorage.setItem("10am", (plan10am.val()))
  localStorage.setItem("11am", (plan11am.val()))
  localStorage.setItem("12pm", (plan12pm.val()))
  localStorage.setItem("1pm", (plan1pm.val()))
  localStorage.setItem("2pm", (plan2pm.val()))
  localStorage.setItem("3pm", (plan3pm.val()))
  localStorage.setItem("4pm", (plan4pm.val()))
  localStorage.setItem("5pm", (plan5pm.val()))

})

