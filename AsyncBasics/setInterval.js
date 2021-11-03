// SET INTERVAL METHOD
// setInterval calls/executes a function after a set number of milliseconds (1000 milliseconds equals 1 second). Also, setInterval will continue calling/executing the function at the specified interval (AKA Number of milliseconds).
// NOTE: Using the Chrome console instead of the divs for this example

/*
Syntax Example

setInterval(function, milliseconds);
*/

// Example 1
// After the page loads the function runs continuously every four seconds
// setInterval(() => {
//   console.log(`Every four seconds`);
// }, 4000);

// Example 2
// After the page loads the function runs continuously every two seconds (NOTE: Similar to setTimeout JavaScript does NOT wait for the function in the setInterval to run before moving on the rest of the file)
// setInterval(() => {
//   console.log(`Every two seconds`);
// }, 2000);

// Example 3
// The setInterval method will continue calling the function until a clearInterval is called on that setInterval (NOTE: setInterval methods must be set a a variable to use the clearInterval method on them)

// After the page loads the function runs continuously every full second
// const full = setInterval(() => {
//   console.log(`Every full second`);
// }, 1000);

// After the page loads the function runs continuously every half second
// const half = setInterval(() => {
//   console.log(`Every half second`);
// }, 500);

// Selects the button element on the webpage
const stop = document.querySelector(`button`);
// Stops/Clears the "full" and "half" setInterval methods when the "STOP" button is clicked
stop.addEventListener(`click`, () => {
  clearInterval(full);
  clearInterval(half);
});

// Example 4
// Using setInterval to create a stopwatch that counts up from 1
let time = 1;
// setInterval(() => {
//   console.log(time);
//   time++;
// }, 1000);

// Example 5
// Using a setInterval with stopping point (NOTE: Without using an external source (Example: Button click) to stop/clear the setInterval)
let num = 5;
const countdown = setInterval(() => {
  if (num > 0){
    console.log(num);
  } else {
    clearInterval(countdown);
  }
  num--;
}, 1000);