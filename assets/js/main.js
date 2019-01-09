console.log("hi there");
// Randomize utility function
const randomize = MyArray => Math.floor(Math.random() * MyArray.length);
//Our function with Fortune sentence
let tellFortune = (
  jobTitle,
  geoLocation,
  partnerName,
  numberOfChildren,
  houseSize
) =>
  `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName}, with ${
    numberOfChildren === 0
      ? "no kids"
      : numberOfChildren == 1
      ? "one kid"
      : numberOfChildren + " kids"
  }  living in a ${houseSize} square meter house`;

/*
//1) we want a console log with info provided by th user 
let jobTitle = prompt("what is your job", "Webmaster");
let geoLocation = prompt ("Location?", "Rome");
let partnerName = prompt ("Partner name?", "Judy");
let numberOfChildren = prompt ("Children", 2);
let houseSize = prompt ("house Size", 65);
//console log printing out
console.log(tellFortune(jobTitle, geoLocation, partnerName, numberOfChildren, houseSize));
*/
//2) we create some funny fortunes using random values
const jobs = [
  "Webmaster",
  "CEO",
  "durg dealer",
  "Pizza seller",
  "bar tender",
  "plumber",
  "rock-star",
  "clown",
  "scuba diving instructor"
];
const locations = [
  "berlin",
  "damascus",
  "Rome",
  "paris",
  "bangkok",
  "island",
  "north-korea",
  "circus",
  "New York"
];
const partner = [
  "Anne",
  "Ted",
  "Mario",
  "Maria",
  "Judy",
  "Sam",
  "Hiba",
  "Sara",
  "Tamim"
];
// we create random ids to use with our arrays
const jobRandomId = randomize(jobs);
const locationRandomId = randomize(locations);
const partnerRandomId = randomize(partner);
//Random Number max 30
const kids = Math.floor(Math.random() * 10);
// mq between 30 and 300
const mq = Math.floor(Math.random() * (300 - 30) + 30);
//Console log the fortune
console.log(
  tellFortune(
    jobs[jobRandomId],
    locations[locationRandomId],
    partner[partnerRandomId],
    kids,
    mq
  )
);

//print to DOM element "retrieved by ID "
document.getElementById("fortune").innerHTML = tellFortune(
  jobs[jobRandomId],
  locations[locationRandomId],
  partner[partnerRandomId],
  kids,
  mq
);
