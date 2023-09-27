/*Exercise: Using everything you’ve learned up until this point, write a script that asks a user about 
the width, height, and length of a box, then calculate and return to the user the volume of this box.

As an example, a box with width = 20, height = 10, and length = 50 will 
have a volume of 10000 (omitting units, as they are not relevant in this scenario). 
For now, assume that the values provided by the user are valid numbers, 
but if you have any ideas on how, you can try to make this script in such a way that it will be resistant to invalid values.*/

let BoxWidth = Number.prompt("What is the width of the box?", "");
let BoxHeight = Number.prompt("What is the height of the box?", "");
let BoxLength = Number.prompt("What is the length of the box?", "");

BoxVolume = BoxWidth * BoxHeight * BoxLength;

console.log("Box Width: "+ BoxWidth +" * Box Height: "+ BoxHeight +" * Box Length: "+ BoxLength +" = "+ BoxVolume);

// Need to check if prompt is a number still!!!!