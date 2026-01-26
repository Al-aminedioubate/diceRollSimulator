//**Initialisation et declaration de nos variables */
let btnDice = document.getElementById("diceBtn");
let diceImg = document.getElementById("diceImg");

let roll = document.getElementById("itemsRolled");
let diceValue;

//Fonction permettant les valeurs aleatoire de 1 a 6
function rollDice() {
	diceValue = Math.floor(Math.random() * 6) + 1;

	diceImg.src = `images/dice${diceValue}.png`;

	/*let p = document.createElement("p");
	p.textContent = "Roll:";*/

	let li = document.createElement("li");
	li.textContent = "Roll:";

	const img = document.createElement("img");
	img.src = `images/dice${diceValue}.png`;

	/*let p = document.createElement("p");
	p.textContent = `images/dice${diceValue}.png`;*/

	li.appendChild(img);
	roll.appendChild(li);
}

//Creons notre evenement
btnDice.addEventListener("click", rollDice);
