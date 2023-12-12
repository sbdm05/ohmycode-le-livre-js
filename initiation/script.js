console.log('connecté !'); 
//let titre = document.getElementById('titre');
titre.style.color = "green"; 




// titre = 2; 
// console.log(titre); // renvoie 2

let score = 0; // Je stocke un chiffre
// console.log(score, "initialisation"); // Je vérifie

score = score + 1; // opération
// console.log (score, "après addition"); // Je vérifie
// Je sélectionne 
// ici votre code

// Je stocke
// ici votre code

// Je soumets l'élément à une action
// ici votre code

// Je stocke une chaîne de caractères
const cours = "Javascript"; 
// Je vérifie
// console.log(cours, "cours"); 

// Je concatène
const mot1 = "Hello"; 
const mot2 = "World!";
const phrase = mot1 + " " + mot2 // concaténation
//console.log(phrase, "phrase"); // Je vérifie

// Calcul
let calcul = "0"; // Je stocke
calcul = calcul + 1; // Addition
console.log(calcul, "calcul"); // Je vérifie

// Je sélectionne et je stocke

const btnRed = document.getElementById('btn-red'); 
// console.log(btnRed, "bouton rouge"); 
const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue); 

let compteur = 0;
console.log(compteur, "compteur au démarrage"); 


// Je soumets le cercle rouge à une action
btnRed.addEventListener('click', function(){
    // console.log('cliqué'); 
    add(); 
}); 

// Je soumets le cercle bleu à une action
btnBlue.addEventListener('click', function(){
    //console.log('cercle bleu cliqué'); 
    add(); 
}); 

function add(){
    compteur = compteur + 1; 
    console.log(compteur, "compteur après incrémentation"); 
    titre.innerText = compteur; 
}; 




setTimeout(function(){
    // Je supprime les cercles
    btnRed.remove(); 
    btnBlue.remove(); 
}, 30000); 




// btnBlue.remove(); 
//     btnRed.remove(); 
//     titre.innerText = "Vous avez marqué" + " " + compteur + " " + "points"; 