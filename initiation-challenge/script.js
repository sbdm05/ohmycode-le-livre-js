console.log('connecté !'); 
//let titre = document.getElementById('titre');
titre.style.color = "green"; 

// le bouton pour rejouer
const replay = document.getElementById('replay'); 
console.log(replay); 

// Je sélectionne et je stocke
const btnRed = document.getElementById('btn-red'); 
// console.log(btnRed, "bouton rouge"); 
const btnBlue = document.getElementById('btn-blue');
// console.log(btnBlue); 
let compteur = 0;
// console.log(compteur, "compteur au démarrage"); 

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
}, 10000); 


replay.addEventListener('click', function(){
    console.log('cliqué'); 
    location.reload();
});

