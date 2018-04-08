// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// Submit
$(".create").on("click", function(event){
   event.preventDefault();

var height = $("#inputHeight").val();
var width = $("#inputWidth").val();

$("#pixelCanvas").empty();
makeGrid(height,width);
});

function makeGrid(height,width) {

//Height
for (h = 0; h < height; h++) {
$("#pixelCanvas").append($("<tr></tr>"));

//Width
for (w = 0; w < width; w++) {
$("tr").last().append($("<td></td>"));
 }}

//Click square, change color
$("#pixelCanvas").on("click", "td" ,function() {
  $(this).css("background-color",$("#colorPicker").val());
});

// Reset grid
$('.reset').on('click', function(event){
     event.preventDefault();
     var length = $("#pixelCanvas").children().length;
     if(length > 0)
     {
        $("#pixelCanvas").children().remove();
     }
        $("#inputHeight").val('1');
        $("#inputWidth").val('1');
});
}
