// ASYNC AWAIT
// Async Await is an alternative process for consuming a promise
// The ASYNC keyword makes a function return a promise. Also, lets our JavaScript know the function we are creating has asynchronous code inside of it.
// The AWAIT keyword makes the function wait for promise to complete
// NOTE: The setTimeout method is used in this lesson to mimic waiting on a response from an external source (Example: Data from a server)

// Example 1
const div1 = document.querySelector(`#first`);
const p1 = document.createElement(`p`);
p1.innerText = `Example 1`;
div1.append(p1);

// Without using Async Await...
// function getUserInfo(email){
//   setTimeout(() => {
//     return email;
//   }, 2000);
// }

// const user1 = getUserInfo(`me@gmail.com`);
// p1.innerText = user1;

function getUserInfo(email){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(email);
    }, 2000);
  });
}

async function example1(){
  // Awaits (AKA Waits) for the function to return a value before moving on to the next line
  // NOTE: Sets the value in the resolve (AKA The argument for the email parameter) to the user1 variable
  const user1 = await getUserInfo(`me@gmail.com`);
  p1.innerText = user1;
}
example1();

// Example 2
const div2 = document.querySelector(`#second`);
const p2 = document.createElement(`p`);
p2.innerText = `Example 2`;
div2.append(p2);

function getRandomMovie(movie){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(movie);
    }, 3000);
  });
}

async function example2(){
  // Awaits (AKA Waits) for the function to return a value before moving on to the next line
  p2.innerText = await getRandomMovie(`Coco`);
}
example2();

// Example 3
const div3 = document.querySelector(`#third`);
const p3 = document.createElement(`p`);
p3.innerText = `1st Example 3 Element`;
div3.append(p3);
const p4 = document.createElement(`p`);
p4.innerText = `2nd Example 3 Element`;
div3.append(p4);

function getShowTitle(showTitle){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(showTitle);
    }, 4000);
  });
}

function getReleaseDate(title){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Nov 24, 2021`);
    }, 1000);
  });
}


async function example3(){
  // Awaits (AKA Waits) for the function to return a value before moving on to the next line (NOTE: The AWAIT keyword can be used multiple times in a function labeled the ASYNC keyword)
  const t = await getShowTitle(`Hawkeye`);
  p3.innerText = t;
  p4.innerText = await getReleaseDate(t);
}
example3();

// Example 4
const div4 = document.querySelector(`#fourth`);
const p5 = document.createElement(`p`);
p5.innerText = `Example 4`;
div4.append(p5);

response = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Using the "received" variable to determine whether we received the data that we are pretending we requested
      const received = false;
      if (received){
        resolve(`Received Data: ${data}`);
      } else {
        reject(`Failed. Did not receive data.`)
      }
    }, 2000);
  });
}

async function example4(){
  // If the request is successful (AKA Resolved) the code in the "try" will run
  try {
    p5.innerText = await response(`Password123`);
    // If the request is NOT successful (AKA Rejected) the code in the "catch" will run
    // The value passed in for "err" is the failed response (AKA The argument for the reject function)
    // NOTE "err" is commonly used as the parameter name. However, it does NOT have to be "err".
  } catch (err) {
    p5.innerText = err;
  }
}
example4();