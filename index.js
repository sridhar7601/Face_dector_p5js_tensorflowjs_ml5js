var i = 0;
var j = 0;
var txt1 = 'Welcome..!';
var txt2 = 'Wanna Try Ml In Js...';
var speed = 150; /* The speed/duration of the effect in milliseconds */


function myFunction() {
  document.getElementById("demo3").onclick = function () {
    location.href = "/Testingpage.html";
}
};
function myFunctiontwo() {
  document.getElementById("demo4").onclick = function () {
    location.href = "http://127.0.0.1:5500/Trainingpage.html";
}

};

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
};
typeWriter1()
function typeWriter2() {
    if (j < txt2.length) {
      document.getElementById("demo2").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
  };



typeWriter2()
