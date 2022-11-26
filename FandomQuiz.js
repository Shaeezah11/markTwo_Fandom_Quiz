var readLineSync=require('readline-sync');
var score=0; //score initalized

var userName = readLineSync.question("What's your name? ");
console.log("Welcome "+ userName + " to CLI Fandom quiz");


var questions =[{
    question:"Are You fan of RomCom or Adventures ?",
    answer: "RomCom"
    },{
    question:"Are you excited for KYY s4 ?",
    answer: "Yes"
    },{
    question:"Do you Think Manan will be forever ?",
    answer: "yes"
    },{
    question:"Is Parth Samthan Hot ?",
    answer: "Too Hot"
    },{
    question:"Is Niti taylor cute ?",
    answer: "Yes"
    }];
// quiz function
function fanQuiz(question, answer) {
  var Answer = readLineSync.question(question);
  if (Answer === answer) { 
    console.log("right!");
    score = score + 1;
  } else {
      console.log("wrong!");    
   }
  console.log("current score: ", score);
  console.log("-------------");
}
// Game function       
function game() {
  for (var i=0; i<questions.length; i++) {
      var currentQuestion = questions[i];
      fanQuiz(currentQuestion.question, currentQuestion.answer)
  }
}

game();
console.log("Your final score is : " + score);