var heightElem = document.getElementById("myRange");
var formElem = document.getElementById("draw-form");

var handlers = {
  brickSymbol: function(){
    var x = document.getElementById("mySelect").value;
    // document.getElementById("brick").innerHTML = "You selected: " + x;
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

/**drawPyramid
 * Renders, in HTML, a Mario pyramid of the specified height
 */
// function drawPyramid(height) {
//     var lastTime; // Tracks the last observed mouse X position
//     var pyramid = document.getElementById("myRange");
//     pyramid.addEventListener("mousedown", function(event) {
//       if (event.which == 1) {
//       lastTime = event.pageX;
//       addEventListener("mousemove", moved);
//       event.preventDefault(); // Prevent selection
//     }
//   });

 
//   function buttonPressed(event) {
//     if (event.buttons === null)
//       return event.which !== 0;
//     else
//       return event.buttons !== 0;
//   }

//   function moved(event) {
//     if (!buttonPressed(event)) {
//       removeEventListener("mousemove", moved);
//     } else {
//     // for each row....
//       for (var row = 0; row < height; row++) {
//         // figure out number of bricks and spaces
//         var numBricks = row + 2;
//         var numSpaces = height - row - 1;
//         // build up a string for this row
//         var rowStr = "";
//         var rowBricks = "";
//         for (var i = 0; i < numSpaces; i++) {
//             rowStr += ".";
//         }
//         for (var i = 0; i < numBricks; i++) {
//             rowBricks += "#";
//         }
//       }
        // create a text element with the string of characters
        // textElem = document.createTextNode(rowStr);

        // create a <div> element with the text inside
        // rowElem = document.createElement("div");
        // rowElem.appendChild(textElem);

        // insert the div as a child of the container <div>
        // document.getElementById("pyramid").appendChild(rowElem);
//     }
// }
// } 

  
// // display a bar and set up event handlers so that dragging to the left or right on this bar makes it narrower or wider
//   var lastX; // Tracks the last observed mouse X position
//   // var rect = document.querySelector("div");
//   var rect = document.getElementById("orangeBox");
//   rect.addEventListener("mousedown", function(event) {
//     if (event.which == 1) {
//       lastX = event.pageX;
//       addEventListener("mousemove", moved);
//       event.preventDefault(); // Prevent selection
//     }
//   });

//   function buttonPressed(event) {
//     if (event.buttons === null)
//       return event.which !== 0;
//     else
//       return event.buttons !== 0;
//   }
//   function moved(event) {
//     if (!buttonPressed(event)) {
//       removeEventListener("mousemove", moved);
//     } else {
//       var dist = event.pageX - lastX;
//       var newWidth = Math.max(10, rect.offsetWidth + dist);
//       rect.style.width = newWidth + "px";
//       lastX = event.pageX;
//     }
//   }

