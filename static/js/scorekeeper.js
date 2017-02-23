'use strict'

/*
*	Declarations and Initialization	
*/ 
let playerOneScore = 0;
let playerTwoScore = 0;
let gameOver = false;


/*
*	DOM SELECTION
*/

// Headers
let playerOneHeader = document.querySelector('span.player1');
let playerTwoHeader = document.querySelector('span.player2');

// Buttons
let playerOneBtn = document.querySelector('button.btn.btn-primary.player1');
let playerTwoBtn = document.querySelector('button.btn.btn-primary.player2');
let resetBtn = document.querySelector('button.btn.btn-primary.reset');

// High Score
let highScore = parseInt(document.querySelector('.input-group.spinner > input').value);
let incrementHighScore = document.querySelector('.fa.fa-caret-up');
let decrementHighScore = document.querySelector('.fa.fa-caret-down');


/*
*	EVENT LISTENERS
*/

// Increment `highScore`
incrementHighScore.addEventListener('click', function(){
	highScore++;
})

// Decrement `highScore`
decrementHighScore.addEventListener('click', function(){
	highScore--;
})

// Reset Score Keeper
resetBtn.addEventListener('click', function(){
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneHeader.textContent = 0;
	playerTwoHeader.textContent = 0;
	
	// adjust font
	playerOneHeader.classList.remove('winner', 'loser');
	playerTwoHeader.classList.remove('winner', 'loser');
	resetBtn.classList.remove('winner')

	// reset game state
	gameOver = !gameOver;
})

// Increment `playerOneScore`
playerOneBtn.addEventListener('click', function(){
	if (!gameOver){
		playerOneScore++;
		playerOneHeader.textContent = playerOneScore;
		if (playerOneScore == highScore){
			gameOver = !gameOver;
			playerOneHeader.classList.toggle('winner');
			playerTwoHeader.classList.toggle('loser');
			resetBtn.classList.toggle('winner');
		}
	}
});


// Increment `playerTwoScore`
playerTwoBtn.addEventListener('click', function(){
	if (!gameOver){
		playerTwoScore++;
		playerTwoHeader.textContent = playerTwoScore;
		if (playerTwoScore == highScore){
			gameOver = !gameOver;
			playerOneHeader.classList.toggle('loser');
			playerTwoHeader.classList.toggle('winner');
			resetBtn.classList.toggle('winner');
		}
	}
});
