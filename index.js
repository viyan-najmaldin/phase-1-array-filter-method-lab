// Code your solution here
const driverss = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
function findMatching(array, name) {
  return array.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}
console.log(findMatching(driverss, "Bobby"));

function fuzzyMatch(array, letter) {
  return array.filter((first) => first.substring(0, letter.length) === letter);
}
console.log(fuzzyMatch(driverss, "S"));
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
function matchName(drivers, argument) {
  return drivers.filter(function (driver) {
    return driver.name === argument;
  });
}
console.log(matchName(drivers, "Bobby"));