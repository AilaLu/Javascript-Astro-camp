//user will be able to input a question, then our program will output a random fortune.

var userName = "Jasper";
var userQuestion = "Is there any extraterrestrial beings?";
var randomNumber = Math.floor(Math.random() * 8); //generate a random number between 0 and 7
userName ? console.log("Hello!, " + userName + "!") : console.log("Hello!");
console.log(userQuestion);

var eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "Magic Eight Ball: Hell yeah!!";
    break;
  case 1:
    eightBall = "Magic Eight Ball: It is certain!";
    break;
  case 2:
    eightBall = "Magic Eight Ball: It is decidedly so..";
    break;
  case 3:
    eightBall = "Magic Eight Ball: Are you serious? Try again..";
    break;
  case 4:
    eightBall = "Magic Eight Ball: Hell no!!";
    break;
  case 5:
    eightBall = "Magic Eight Ball: Do not count on it..";
    break;
  case 6:
    eightBall = "Magic Eight Ball: My sources say no..";
    break;
  case 7:
    eightBall = "Magic Eight Ball: Outlook not so good..";
    break;
}
console.log(eightBall);
