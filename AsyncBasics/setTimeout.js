// SET TIMEOUT METHOD
// setTimeout calls/executes a function after a set number of milliseconds (1000 milliseconds equals 1 second)

/*
Syntax Example

setTimeout(function, milliseconds);
*/

// Example 1
// Function runs two seconds after the webpage (AKA JavaScript File) loads
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Example 1 Element`;
    div1.append(p1);
  }, 2000);
  
  // Example 2
  // Function runs one second after the webpage loads
  // NOTE: JavaScript does NOT wait for the function in the above to run before moving on to the rest of the file
  setTimeout(() => {
    const div2 = document.querySelector(`#second`);
    const p2 = document.createElement(`p`);
    p2.innerText = `Example 2 Element`;
    div2.append(p2);
  }, 1000);
  
  // Example 3 (Nesting with setTimeout)
  // Function runs three seconds after the page loads
  setTimeout(() => {
    const div3 = document.querySelector(`#third`);
    const p3 = document.createElement(`p`);
    p3.innerText = `Example 3 Element`;
    div3.append(p3);
    // Function runs four seconds after the page loads (One second after the `Example 3 Element` is displayed (AKA After the parent function runs))
    setTimeout(() => {
      const p4 = document.createElement(`p`);
      p4.innerText = `Second Example 3 Element`;
      div3.append(p4);
    }, 1000);
  }, 3000);