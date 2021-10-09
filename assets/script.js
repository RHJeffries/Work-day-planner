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
  if (plannedTime > hour){
   $(this).addClass("future")
  } 
  else if (plannedTime === hour) {
    $(this).addClass("present");
  }
  else  {
    $(this).addClass("past");
  }
})
}
 
colorTime();
// interval for the colour coding to be updated every 5mins, it doesn't require a page refresh 
setInterval(colorTime, 300000);
    /*$(".saveBtn").click(function () {
        
        // val() method is used to get the values from 
       // textarea and stored in txt variable
        var txt = $("#textarea").val();
        localStorage.setItem("txt", );
    });*/

   // saveBtn.addEventListener("click", function(event){
     //   event.preventDefault();

   /*  $('.saveBtn').on("click", function() {
       console.log("clicked");
       var  = 
       $(this).attr('id');
       $("#input" + btnNum).val();
     });*/


