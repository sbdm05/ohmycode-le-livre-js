console.log('connecté'); 

// btnSuccess
const btnSuccess = document.querySelector('.btn-success'); 
console.log(btnSuccess); 

// DIV cookies; 
const cookies = document.querySelector('.cookies'); 
console.log(cookies); 

// Je stocke la valeur du localStorage
let valeurCle = localStorage.getItem('banniere'); 
console.log(valeurCle, "valeur de la clé"); 

// Je déclare la fonction
function check(){
    // ici bloc à exécuter
    if(valeurCle){
        console.log("stockage existe"); 
        cookies.remove(); 
    }else{
        console.log("stockage n'existe pas"); 
    }; 
}; 

// J'appelle la fonction
check(); 

btnSuccess.addEventListener('click', function(){
    // Je crée le localStorage avec la valeur "oui"; 
    localStorage.setItem('banniere', 'oui'); 

    console.log('bouton cliqué !'); 
    cookies.style.opacity = "0"; 
}); 


// const valeur = objet.propriete.propriete; 


// const user = {
//     prenom : {
//       premier : "un", 
//       deuxieme : "deux"
//     }
// };
  
// const premierPrenom = user.prenom.premier; 
// console.log(premierPrenom); // "un"

