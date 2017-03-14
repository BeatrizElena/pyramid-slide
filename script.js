var heightElem = document.getElementById("myRange");
var formElem = document.getElementById("draw-form");

var handlers = {
  brickSymbol: function(){
    var x = document.getElementById("mySelect").value;
    return x;
  },
  mySlide: function() {
    var y = document.getElementById("myRange").value;
    document.getElementById("slideValue").innerHTML = y;
    return y;
  },
  myPyramid: function(event) {
    height = 1;
    event.preventDefault();

    // height from slider
    heightStr = heightElem.value;
    // console.log(heightStr);
    
    handlers.mySlide();
   
    // convert the string to an int
    height = parseInt(heightStr);
    var symbol = handlers.brickSymbol();
    
    // draw pyramid with the specified height
    drawPyramid(height, symbol);
}
};

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height, symbol) {
    // Clear old pyramid
    document.getElementById("pyramid").innerHTML="";
    // for each row....
    for (var row = 0; row < height; row++) {
        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
        rowStr += symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}



