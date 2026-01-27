//**Initialisation et declaration de nos variables */
let btnDice = document.getElementById("diceBtn");
let diceImg = document.getElementById("diceImg");

let roll = document.getElementById("itemsRolled");

let diceValue;
let history = [];
rotation = document.getElementById("dice");

//Fonction permettant les valeurs aleatoire de 1 a 6
function rollDice() {
	diceValue = Math.floor(Math.random() * 6) + 1;

	diceImg.src = `images/dice${diceValue}.png`;

	let li = document.createElement("li");

	//creons un tableau ici pour garder l'historique de nos lancer pour connaitre la position de lancer de chaque dé
	history.push(diceValue);
	history.forEach((value, index) => {
		li.textContent = `Roll ${index + 1} :`;
	});

	//creons et recuperons l'image de dé tirer pour pouvoir l'ajouter sur la liste d'affichage.
	const img = document.createElement("img");
	img.src = `images/dice${diceValue}.png`;

	//ajoutons a l'element li notre img
	li.appendChild(img);

	//ajoutons a notre element principale notre li contenant la position du dé lancer et son image.
	roll.appendChild(li);
}

//Creons notre evenement
btnDice.addEventListener("click", () => {
	rotation.classList.add("roll-animation");
	setTimeout(() => {
		rotation.classList.remove("roll-animation");
		rollDice();
	}, 1000);
});
