/*Exercise: Using everything you’ve learned up until this point, write a script that asks a user about 
the width, height, and length of a box, then calculate and return to the user the volume of this box.

As an example, a box with width = 20, height = 10, and length = 50 will 
have a volume of 10000 (omitting units, as they are not relevant in this scenario). 
For now, assume that the values provided by the user are valid numbers, 
but if you have any ideas on how, you can try to make this script in such a way that it will be resistant to invalid values.*/

let BoxWidth = Number.prompt("Enter the width of the box.", "0");
let BoxHeight = Number.prompt("Enter the height of the box.", "0");
let BoxLength = Number.prompt("Enter the length of the box.", "0");

let BoxVolume = BoxWidth * BoxHeight * BoxLength;

alert(`BoxVolume = Box Width * BoxHeight * BoxLength = ${BoxWidth} * ${BoxHeight} * ${BoxLength} = ${BoxVolume}`);

