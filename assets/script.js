// variables for each time slot
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

// time calculation to be used in colouring the time slots
var timeNow = moment();
console.log(timeNow);
var hour = parseInt(timeNow.format("H"));
console.log(hour);

// function to display colour in the time slot
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


// get entries from local storage and display, so entries remain after refresh or closing tab
$("#9").append(localStorage.getItem("9am"));
$("#10").append(localStorage.getItem("10am"));
$("#11").append(localStorage.getItem("11am"));
$("#12").append(localStorage.getItem("12pm"));
$("#13").append(localStorage.getItem("1pm"));
$("#14").append(localStorage.getItem("2pm"));
$("#15").append(localStorage.getItem("3pm"));
$("#16").append(localStorage.getItem("4pm"));
$("#17").append(localStorage.getItem("5pm"));


$("#clear").click(function () {
  $(".activity").val("");
  localStorage.clear();
}
)

