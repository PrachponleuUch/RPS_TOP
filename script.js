"use strict"

function getComputerChoice(){
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * (computerChoice.length))];
}

function playRound(playerSelection, computerSelection){
  switch (playerSelection.toLowerCase()){
    case ("rock"):
      if (computerSelection === "paper"){ return "You Lose! Paper beats Rock.";}
      else if (computerSelection === "scissors"){ return "You Win! Rock beats Scissors.";}
      else {return "You draw.";}
    case ("paper").toLowerCase():
      if (computerSelection === "scissors"){ return "You Lose! Scissors beats Paper.";}
      else if (computerSelection === "rock"){ return "You Win! Paper beats Rock.";}
      else {return "You draw.";}
    case ("scissors").toLowerCase():
      if (computerSelection === "rock"){ return "You Lose! Rock beats Scissors.";}
      else if (computerSelection === "paper"){ return "You Win! Scissors beats Paper.";}
      else {return "You draw.";}
    default:
      return "Please enter a valid option next time";
  }
}

function game(val){
  let playerSelection = val;
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  let resultHTML = document.querySelector('#result');
  resultHTML.textContent = result;
  if (result.includes("Win")){
    player++;
  }
  else if(result.includes("Lose")){
    computer++;
  }
  console.log(`\n${result}`);
  gameCount++;
  if (gameCount === 5){
    finalResult = (player > computer) ? 'You Win!': 'You Lose!';
    finalResult = (player === computer) ? 'You draw': finalResult;
    let finalResultHTML = document.querySelector('#finalResult');
    finalResultHTML.textContent = `\nPlayer: ${player} | \nComputer: ${computer} | \n${finalResult}`;
    setTimeout(function(){
      alert("Thank you for playing");
      location.reload();
    }, 500); 
  }
}

let player = 0;
let computer = 0;
let finalResult;
let gameCount = 0;

let btns = document.querySelectorAll("button")
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    game(btn.value);
  });
});





