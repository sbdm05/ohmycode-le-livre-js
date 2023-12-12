console.log('connecté'); 

// 1 - Je sélectionne et stocke tous les éléments nécessaires
const form = document.getElementById('formulaire'); 
const prenom = document.getElementById('prenom'); 
const nom = document.getElementById('nom'); 
const email = document.getElementById('email'); 
const message = document.getElementById('message');

const msgError  = document.querySelectorAll('.error'); 

const titre = document.getElementById('titre'); 


// Je détecte la validation du formulaire
form.addEventListener('submit', function(e){
    e.preventDefault(); 
    console.log('formulaire envoyé'); 
    // Je récupère les valeurs de chacun des inputs

    const nomValue = nom.value.trim(); 
    console.log(nomValue, "nom");
    const emailValue = email.value.trim(); 
    console.log(emailValue, "email");
    const messageValue = message.value.trim(); 
    console.log(messageValue, "message"); 
    
    const user = {
        prenom : prenom.value, 
        nom: nom.value, 
        email: email.value
    } 

    //form.remove(); 
    form.style.display = 'none'; 

    titre.innerHTML = 'Merci' + ' ' + prenom.value; 
}

    // console.log(prenomValue.length, "prenom");






    

    // Amélioration de l'Expérience Utilisateur
    // Tous les messages d'erreur sont invisibles
    msgError.forEach(error =>{
        error.classList.add('invisible'); 
    }); 

    // Je vérifie les informations de l'utilisateur
    if(prenomValue.length < 2 || prenomValue.length > 10){
        console.log('erreur prenom'); 
        prenom.nextElementSibling.classList.remove('invisible');
    }else if(nomValue.length < 3 || nomValue.length > 15){
        console.log('erreur nom'); 
        nom.nextElementSibling.classList.remove('invisible');
    }else if(messageValue.length < 10 || messageValue.length > 100) {
        console.log('erreur message'); 
        message.nextElementSibling.classList.remove('invisible');
    }else{
        console.log('succès'); 
    }; 

}); // fermeture de form.addEventListener








