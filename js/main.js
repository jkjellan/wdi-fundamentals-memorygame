console.log("hey there");
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var score = 0;


var checkForMatch = function() {
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		score += 1;
	}
	else{
		alert("Sorry, try again");
	}
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	if(cardsInPlay.length === 2){
		checkForMatch();
		keepScore();
	}
};

var createBoard = function () {
	for(i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);

		document.getElementById('reset').addEventListener('click',resetBoard);

		keepScore();

	}
};

var resetBoard = function () {
	document.getElementById('game-board').innerHTML = ' ';
	cardsInPlay = [];
	createBoard();
};

var keepScore = function () {
	document.getElementById('score').innerHTML = 'score: ' + '<span class="scoreCount">' + score + '</span>';
};

createBoard();



