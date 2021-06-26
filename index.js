
 var readLineSync = require("readline-sync");
const chalk=require("chalk");



var score=0;


function Greetings(){
  var name=readLineSync.question("What's your name ? ");
console.log(chalk.bold.blue("Welcome ")+chalk.bold.underline.yellow(name)+"! "+"This quiz will test your knowledge of" +chalk.bold.yellow(" Indian states capital!"));

}







var questions=[
  {
    question:"Q1 What is the Capital of West Bengal? ",
    answer: "Kolkata"
  },
  {
    question:"Q2 What is the Capital of Tripura? ",
    answer:"Agartala"
  },
  {
    question:"Q3 What is the Capital of Rajasthan? ",
    answer:"Jaipur"
  },
  {
    question:"Q4 What is the Capital of Sikkim? ",
    answer:"Gangtok"
  },
  {
    question:"Q5 What is the Capital of Arunachal Pradesh? ",
    answer:"Itanagar"
  },
  {
    question:"Q6 What is the Capital of Maharasthtra? ",
    answer:"Mumbai"
  },
  {
    question:"Q7 What is the Capital of Mizoram? ",
    answer:"Aizwal"
  },
  {
    question:"Q8 What is the Capital of Chhattisgarh? ",
    answer:"Raipur"
  },
  {
    question:"Q9 What is the Capital of Telangana State? ",
    answer:"Hyderabad"
  },
  {
    question:"Q10 What is the Capital of Assam? ",
    answer:"Dispur"
  },
  {
    question:"Q11 What is the Capital of Uttar Pradesh? ",
    answer:"Lucknow"
  },
  {
    question:"Q12 What is the Capital of Himachal Pradesh? ",
    answer:"Shimla"
  },
  {
    question:"Q13 What is the Capital of Gujrat? ",
    answer:"Gandhinagar"
  },
  {
    question:"Q14 What is the Capital of Bihar? ",
    answer:"Patna"
  },
  {
    question:"Q15 What is the Capital of Haryana? ",
    answer:"Chandigarh"
  },
  {
    question:"Q16 What is the Capital of Punjab? ",
    answer:"Chandigarh"
  },
];



function play(question,answer){
  var userAnswer=readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right"));
    score++;
  }
  else{
    console.log(chalk.red("Wrong"));
  }

  console.log("Current Score: ",score);
  console.log(chalk.blue("-------------------------------------------------------------------------------------------"));
}


function logic(){
  for(var i=0; i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question , currentQuestion.answer)
  }
}



function lastScore(){
  console.log("Wooho you scored ",score);

}

Greetings();
logic();
lastScore();