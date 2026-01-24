//**Initialisation et declaration de nos variables */
let btnDice = document.getElementById("diceBtn");
let diceImg = document.getElementById("diceImg");

//Fonction permettant les valeurs aleatoire de 1 a 6
function rollDice() {
	diceValue = Math.floor(Math.random() * 6) + 1;

	diceImg.src = `images/dice${diceValue}.png`;
}

//Creons notre evenement
btnDice.addEventListener("click", rollDice);
