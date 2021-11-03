// CALLBACKS
// A callback function is a function passed into another function as an argument, which is then invoked/executed inside the outer/parent function to complete some kind of action
// NOTE: The setTimeout method is used in this lesson to mimic waiting on a response from an external source (Example: Data from a server)

// Example 1
const div1 = document.querySelector(`#first`);
const p1 = document.createElement(`p`);
p1.innerText = `Example 1`;
div1.append(p1);

// Without using a Callback...
// function getUserInfo(email){
//   setTimeout(() => {
//     return email;
//   }, 2000);
// }

// The `me@gmail.com` value is NOT set as the innerText because JavaScript does NOT wait for the function to be completed before setting a value for user1.
// const user1 = getUserInfo(`me@gmail.com`);
// p1.innerText = user1;

// Using a Callback...
// NOTE: The parameter name does NOT have to be "callback". However, "callback" is commonly used as the parameter name when setting up a function to accept a callback function as an argument for a parameter.
function getUserInfo(email, callback){
  setTimeout(() => {
    callback(email);
  }, 2000);
}

// The `me@gmail.com` value is set as the innerText because the value for innerText is being set in the Callback function that is passed into the getUserInfo function as an argument, which is then executed inside the getUserInfo function to set the innerText value
getUserInfo(`me@gmail.com`, e => {
  p1.innerText = e;
});

// Example 2
const div2 = document.querySelector(`#second`);
const p2 = document.createElement(`p`);
p2.innerText = `Example 2`;
div2.append(p2);

// The `Friday` value is set as the innerText because the value for innerText is being set in the Callback function that is passed into the getRandomMovie function as an argument, which is then executed inside the getRandomMovie function to set the innerText value
getRandomMovie = (movie, callback) => {
  setTimeout(() => {
    callback(movie);
  }, 3000);
}

getRandomMovie(`Friday`, m => {
  p2.innerText = m;
});

// Example 3
const div3 = document.querySelector(`#third`);
const p3 = document.createElement(`p`);
p3.innerText = `1st Example 3 Element`;
div3.append(p3);
const p4 = document.createElement(`p`);
p4.innerText = `2nd Example 3 Element`;
div3.append(p4);

function getShowTitle(showTitle, callback){
  setTimeout(() => {
    callback(showTitle);
  }, 4000);
}

function getReleaseDate(title, callback){
  setTimeout(() => {
    callback(`Nov 24, 2021`);
  }, 1000);
}

// The `Hawkeye` value is set as the innerText because the value for innerText is being set in the Callback function that is passed into the getShowTitle function as an argument, which is then executed inside the getShowTitle function to set the innerText value. Also, in this example chaining on another callback to set the innerText using the "response" from the second request/function (AKA getReleaseDate).
getShowTitle(`Hawkeye`, t => {
  p3.innerText = t;
  getReleaseDate(t, d => {
    p4.innerText = d;
  });
});

// Example 4
const div4 = document.querySelector(`#fourth`);
const p5 = document.createElement(`p`);
p5.innerText = `Example 4`;
div4.append(p5);

response = (data, onSuccess, onFailure) => {
  setTimeout(() => {
    // Using the "received" variable to determine whether we received the data we are pretending we requested
    const received = false;
    if (received){
      onSuccess(`Received Data: ${data}`);
    } else {
      onFailure(`Failed. Did not receive data.`)
    }
  }, 2000);
}

// This is an example of a request that can possibly fail. If successful then the onSuccess callback will run. If the request fails then the onFailure callback will run.
response(`Password123`, s => {
  p5.innerText = s;
}, f => {
  p5.innerText = f;
});