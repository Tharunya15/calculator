function calculate(){
    var number1=parseInt(document.getElementById("exp1").value);
    var number2=parseInt(document.getElementById("exp2").value);
    var result=number1+number2;
    document.getElementById("result").value=result;
}


function changecolor(){
    document.body.style.backgroundColor="#CCC";
}

function display(){
var d = new Date();
var time = d.getHours();
if (time >= 6 && time < 12) {
    alert("Good morning 😊");
  } else if (time >= 12 && time < 18) {
    alert("Good afternoon 😊");
  } else if (time >= 18 && time < 22) {
    alert("Good evening 😊");
  } else {
    alert("Good night 😊");
  }
}
