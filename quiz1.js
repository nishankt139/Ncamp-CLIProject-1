var readlineSync = require("readline-sync")

var score = 0;
var userName = _question("What's your name?...");

console.log("Welcome " + userName + " to DO YOU KNOW Tanay?....\n");

function play(question, answer){

  var readAnswer = _question(question);
  
  if (readAnswer === answer){
    console.log("right!");
    score = score +1 ;
  }
  else{
    console.log("Wrong!");
  }

  console.log("Current score: ", score);
  console.log("---------------");
}


var Questions = [

{
  question: "Where do you live? ",
  answer: "Mumbai",
},

{
  question: "what is your favorite holiday destination? ",
  answer: "Shimla",
},

{
  question: "Who is your mentor? ",
  answer: "Tanay Pratap",
},

{
  question:"What is your favorite food? ",
  answer: "PavBhaji",
}

];

for (var i=0; i<Questions.length; i++){
  var Current = Questions[i];
  play(Current.question, Current.answer);

}

console.log("YAAYY!!!\nYour Score is: ", score);