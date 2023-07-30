let wins = 0;
let losses = 0;
let ties = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', function() {
	playRound('rock');
});

paperBtn.addEventListener('click', function() {
	playRound('paper');
});

scissorsBtn.addEventListener('click', function() {
	playRound('scissors');
});

function playRound(playerSelection) {
	const choices = ['rock', 'paper', 'scissors'];
	const computerSelection = choices[Math.floor(Math.random() * choices.length)];

	if(playerSelection === computerSelection) {
		ties++;
		displayScore();
	}
	else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
	        playerSelection === 'scissors' && computerSelection === 'paper' ||
	        playerSelection === 'paper' && computerSelection === 'rock') {
		wins++;
		displayScore();
	}
	else {
		losses++;
		displayScore();
	}
	
}

function displayScore() {
	document.querySelector('#wins').textContent = wins;
	document.querySelector('#ties').textContent = ties;
	document.querySelector('#losses').textContent = losses;
}