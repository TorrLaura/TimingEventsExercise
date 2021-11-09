// ASYNC BASICS EXERCISE

// 1
let name1 = "Luke Skywalker";

function lukeName() {
  console.log(`Question 1`);
  console.log(name1);
}

// function luke(n) {
//   setTimeout(() => {
//     name1 = n;
//   }, 1000);
// }
// luke(`Mark Hamill`);
// lukeName();

function luke(n1, callback) {
  setTimeout(() => {
    callback(n1);
  }, 1000);
}
luke(`Mark Hamill`, n => {
    console.log(n);
});

lukeName();



// 2
let name2 = "Han Solo";

function hanName() {
  console.log(`Question 2`);
  console.log(name2);
}

function han(n) {
  setTimeout(() => {
    name2 = n;
  }, 2000);
}
han(`Harrison Ford`);
hanName();

// 3
let name3 = "Leia Organa";

function leiaName() {
  console.log(`Question 3`);
  console.log(name3);
}

function leia(n){
  setTimeout(() => {
    name3 = n;
  }, 3000);
}
leia('Carrie Fisher');
leiaName();