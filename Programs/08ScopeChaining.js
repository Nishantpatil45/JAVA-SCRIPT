var name = "Nishant";

console.log("Line number 3", name);

function sayName() {
  var name = "Mr. N";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Mr. NP";
    console.log("Line number 12", name);
  }
}

sayName();
