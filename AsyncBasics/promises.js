// PROMISES
// A Promise is an object representing the eventual completion or failure of an asynchronous operation (A Promise is a returned object to which you attach callbacks, instead of passing callbacks into a function)
// NOTE: The setTimeout method is used in this lesson to mimic waiting on a response from an external source (Example: Data from a server)

// Basic Example of a Promise
const p = new Promise((resolve, reject) => {
    resolve();
  });
  p.then(() => console.log(`This is a basic Promise`));
  
  // Example 1
  const div1 = document.querySelector(`#first`);
  const p1 = document.createElement(`p`);
  p1.innerText = `Example 1`;
  div1.append(p1);
  
  // Without using a Promise...
  // function getUserInfo(email){
  //   setTimeout(() => {
  //     return email;
  //   }, 2000);
  // }
  
  // const user1 = getUserInfo(`me@gmail.com`);
  // p1.innerText = user1;
  
  function getUserInfo(email){
    // A Promise takes one argument which is a function with two parameters (Resolve and Reject)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(email);
      }, 2000);
    });
  }
  // The ".then" is the equivalent to the callback function created using callbacks (NOTE: There is no semicolon after the executing of the function because the ".then" is chained on to the function to consume the Promise that is returned)
  getUserInfo(`me@gmail.com`)
  // Consuming the Promise (AKA Doing something with the value/data returned from the promise)
  // NOTE: Arrow function are commonly used for consuming a promise because they can be written on a single line.
  .then(e => p1.innerText = e);
  
  // OR
  // getUserInfo(`me@gmail.com`).then(e => p1.innerText = e);
  
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
  
  getRandomMovie(`Last Night In Soho`)
  // Consuming the Promise (AKA Creating the callback function)
  .then(m => p2.innerText = m);
  
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
  
  getShowTitle(`Hawkeye`)
  // Consuming the Promise returned from the getShowTitle function (AKA Request)
  .then(t => {
    p3.innerText = t;
    return getReleaseDate(t);
  })
  // Consuming the Promise returned from the getReleaseDate function (AKA Request)
  .then(d => p4.innerText = d);
  
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
  
  response(`Password123`)
  // Code in the ".then" runs when request is successful (AKA Resolved)
  .then(s => p5.innerText = s)
  // A ".catch" is used to have something set up in case a request is not successful
  // Code in the ".catch" runs when request is NOT successful (AKA Rejected)
  .catch(f => p5.innerText = f);