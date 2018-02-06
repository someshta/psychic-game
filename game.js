var wins = 0;
var losses = 0;



//3. then compare the computers choice with the users choice
function startGame() {
	var guessesLeft = 3;
	var guessesSoFar = [];
	//1. computer needs to randomly choose a letter. 
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]; 
	console.log(computerChoice);
	//2. user will guess a letter
	var userGuess = '';
	document.onkeyup = function (event){
		
		userGuess = event.key;
		console.log(userGuess);
		//4. if the users choice matches computers, add one point to wins, computer will choose new letter, guesses left and guesses so far will be reset
		if (userGuess === computerChoice){
			wins++;
			alert("YOU WON!");
			document.getElementById("wins").innerHTML = wins;
			startGame();
		}
		//5. if user choice does not match, subtract one from guesses left, add the guess to guesses so far array
		else {
			guessesLeft--;
			guessesSoFar.push(userGuess);
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
			console.log(guessesSoFar);
			console.log(guessesLeft);
			
		}

		if (guessesLeft === 0){
			losses++;
			document.getElementById("losses").innerHTML = losses;
			alert("YOU LOST");
			startGame();
			
		}
		
	}
}
function replay () {
	location.reload()
}
startGame();
//1. figure out where to code, checking if the user has any guesses left
//2. use jquery to update html wins/losses etc..

