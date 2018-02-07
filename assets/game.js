var wins = 0;
var losses = 0;

//Game will start the user with 5 guesses
function startGame() {
	var guessesLeft = 5;
	console.log("guessesLeft:" , guessesLeft);
	//var guessesLeftBrowser = document.getElementById("guessesLeft"); 
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	//console.log("guessesLeftBrowser:" , guessesLeftBrowser ); 
	var guessesSoFar = [];
	console.log("guessesSoFar:" , guessesSoFar);
	//var guessesSoFarBrowser = document.getElementById("guessesSoFar");
	document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
	
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
		//6. if user runs out of guesses, add 1 to losses score, alert "you lost"
		if (guessesLeft === 0){
			losses++;
			document.getElementById("losses").innerHTML = losses;
			alert("YOU LOST");
			startGame();
			
			
		}
		
	}
}


//when user clicks on replay button, guesses left and letters guessed is refreshed
function replay () {
	startGame();
}
startGame();

