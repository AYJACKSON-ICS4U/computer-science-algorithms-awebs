//Displays a row of the array
var displayArray = function(array, min, height) {

    // Use the monospace font in yellow
    textFont(createFont("monospace"), 25);
    fill(230, 255, 0);

    // loop through the array
    for (var i = 0; i < array.length; i++){
      //Displays a row of the array
var displayArray = function(array, min, height) {

  // Use the monospace font in yellow
  textFont(createFont("monospace"), 25);
  fill(230, 255, 0);

  // loop through the array
  for (var i = 0; i < array.length; i++){

      // display the number at 40px increments
      text(array[i], min + (i * 40), height);
      // If it is not the last number
      if (i !== array.length -1){
          // Add a dash in between the numbers
          text(",", min + 26 + (i * 40), height);
      }
  }
};

// Swap function to swap two indexes in an array
var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

// Find the next smallest index from a given start index
var indexOfMinimum = function(array, startIndex) {

  // Store the start index value and number
  var minValue = array[startIndex];
  var minIndex = startIndex;

  // Loop through the rest of the array
  for(var i = minIndex + 1; i < array.length; i++) {
      // If the current index is smaller then the starting index
      if(array[i] < minValue) {
          // Make that the lowest index we have
          minIndex = i;
          minValue = array[i];
      }
  }
  return minIndex;
};

// Impliment everything above for selection sort
var selectionSort = function(array, min, height) {

  var swapIndex;
  // loop through the array
  for (var i = 0; i < array.length - 1; i++){
      // Find the next lowest index
      swapIndex = indexOfMinimum(array, i);
      // Swap the index found
      swap(array, i, swapIndex);
      // Increase the height
      height += 40;
      // Display the new array
      displayArray(array, min, height);
      // Make the stroke red and large
      stroke(255, 0, 0);
      strokeWeight(5);
      // Draw a line between the two effected indexes
      line(min + (swapIndex * 30), height - 34, min + (i * 42), height - 20);
  }
};

// Draws and sorts the array
var main = function(array, min, height){

  displayArray(array, min, height);
  array = selectionSort(array, min, height);
};

background(0, 0, 0);

// Draw lines to seperate the quadrats
stroke(47, 0, 255);
strokeWeight(7);
line(196, 0, 200, 400);
line(0, 195, 400, 195);

// Make an array with random numbers
var array = [];
for (var i = 0; i < 5; i++){
  array.push(round(random(100)));
}
// call main
main(array, 5, 20);

// Top Right array in reverse order
array = [99, 75, 38, 32, 19];
main(array, 204, 20);

// bottom left array with duplicate numbers
array = [96, 10, 96, 14, 14];
main(array, 5, 220);

// bottom right array with one out of order
array = [22, 35, 81, 43, 67];
main(array, 204, 220);

        // display the number at 40px increments
        text(array[i], min + (i * 40), height);
        // If it is not the last number
        if (i !== array.length -1){
            // Add a dash in between the numbers
            text(",", min + 26 + (i * 40), height);
        }
    }
};

// Swap function to swap two indexes in an array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

// Find the next smallest index from a given start index
var indexOfMinimum = function(array, startIndex) {

    // Store the start index value and number
    var minValue = array[startIndex];
    var minIndex = startIndex;

    // Loop through the rest of the array
    for(var i = minIndex + 1; i < array.length; i++) {
        // If the current index is smaller then the starting index
        if(array[i] < minValue) {
            // Make that the lowest index we have
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

// Impliment everything above for selection sort
var selectionSort = function(array, min, height) {

    var swapIndex;
    // loop through the array
    for (var i = 0; i < array.length - 1; i++){
        // Find the next lowest index
        swapIndex = indexOfMinimum(array, i);
        // Swap the index found
        swap(array, i, swapIndex);
        // Increase the height
        height += 40;
        // Display the new array
        displayArray(array, min, height);
        // Make the stroke red and large
        stroke(255, 0, 0);
        strokeWeight(5);
        // Draw a line between the two effected indexes
        line(min + (swapIndex * 30), height - 34, min + (i * 42), height - 20);
    }
};

// Draws and sorts the array
var main = function(array, min, height){

    displayArray(array, min, height);
    array = selectionSort(array, min, height);
};

background(0, 0, 0);

// Draw lines to seperate the quadrats
stroke(47, 0, 255);
strokeWeight(7);
line(196, 0, 200, 400);
line(0, 195, 400, 195);

// Make an array with random numbers
var array = [];
for (var i = 0; i < 5; i++){
    array.push(round(random(100)));
}
// call main
main(array, 5, 20);

// Top Right array in reverse order
array = [99, 75, 38, 32, 19];
main(array, 204, 20);

// bottom left array with duplicate numbers
array = [96, 10, 96, 14, 14];
main(array, 5, 220);

// bottom right array with one out of order
array = [22, 35, 81, 43, 67];
main(array, 204, 220);
