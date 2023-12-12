console.log('connecté'); 
// Je sélectionne et stocke le bouton
const btn = document.querySelector('.btn'); 
console.log(btn); 
// Je sélectionne et stocke la DIV container-notifications
const ctn = document.querySelector('.container-notifications'); 
console.log(ctn); 


btn.addEventListener('click', function(){
    console.log('bouton cliqué'); 
    // Je créé un élément
    const notification = document.createElement('div'); 
    console.log(notification); 

    
    // Je donne un style à la DIV
    notification.classList.add('toast'); 

    // J'insère du contenu texte
    notification.innerText = "Votre fichier est bien enregistré !"
    console.log(notification); 
    
    // J'accroche notification à l'élément ctn
    ctn.appendChild(notification); 

    // Je fixe une action quand le chronometre est terminé
    // setTimeout(function(){
    //     action
    // }, chronometre); 
    
    // A la fin du chrono, je retire la notification du DOM
    setTimeout(function(){
        notification.remove(); 
    }, 2000);
    
}); // Fermeture de btn.addEventListener













