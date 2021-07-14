var countries = ["India", "USA", "Japan", "Russia"];

var cities = new Array("Mumbai", "Pune", "Navi-Mumbai", "Nashik");

//console.log(cities[1]);

//console.log(cities.length);
cities[0] = "Mumbai";
//console.log(cities);

var user = ["nishant", "nishant@nhp.np", 3, 34, true];
//console.log(user);

user.pop();
user.pop();
//console.log(user);
user.unshift("NEW VALUE");
//console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("newyy"));

console.log(Array.from("nishant"));
