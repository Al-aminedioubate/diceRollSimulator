//**Initialisation et declaration de nos variables */
let btnDice = document.getElementById("diceBtn");

//Fonction permettant les valeurs aleatoire de 1 a 6
function rollDice(diceValue) {
	diceValue = Math.floor(Math.random() * 6) + 1;
	console.log(diceValue);
}

//Creons notre evenement
btnDice.addEventListener("click", rollDice);
