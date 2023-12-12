console.log('connecté'); 

// Le formulaire
const form = document.getElementById('form');
// Les champs - input text et input date
const pays = document.getElementById('pays'); 
const start = document.getElementById('start'); 
const end = document.getElementById('end'); 
const listeResultats = document.querySelector('.liste-resultats'); 
// Juste en-dessous des sélections


displayDetails(); 



form.addEventListener('submit', function(e){
    // empêcher le rafraîchissement de la page
    e.preventDefault(); 
    // console.log('formulaire validé'); 
    // Je stocke les valeurs dans l'objet choix
    const choix = {
        pays : pays.value,
        start : start.value,
        end: end.value
    };
    console.log(choix, "choix"); 

    // Je transforme l'objet
    const choixString = JSON.stringify(choix); 
    // console.log(choixString); 

    // Je place l'objet dans le localStorage
    localStorage.setItem('details', choixString); 
    // On rafraichit la page pour faire apparaitre les informations
    window.location.href = window.location.href;
}); // Fermeture form.addEventListener



async function displayDetails(){
    // On transforme au bon format
    const choixObjet = JSON.parse(localStorage.getItem('details'));
    // on place les valeurs dans les champs
    pays.value = choixObjet.pays;
    start.value = choixObjet.start; 
    end.value = choixObjet.end;


    // Is there a way to filter using fetch api? (and not using .filter)

    // Fetch // ajax call ?
    const res = await fetch('http://127.0.0.1:5501/data.json'); 
    console.log(res, 'res')
    const resJS = await res.json(); 


    // filter en fonction du pays enregistré
    const resultats = resJS.filter((voyage) => 
                                    voyage.pays === pays.value
                                    );

    console.log(resultats, "resultats"); 
    //boucle dans le tableau
    resultats.forEach(resultat =>{
        console.log(resultat, "résultat"); 
        // je crée une DIV avec les valeurs à l'intérieur
        const item = `
                    <div class="item">
                        <p class="item-pays">
                            ${resultat.pays}
                        <p>
                        <p>
                            offre pour ${resultat.voyageurs} personnes
                        </p>
                        <p>
                            prix vol inclus ${resultat.prix}€
                        </p>
                        <button>Go !</button>
                    </div>
                     `
                     
        //je place cette DIV dans la page
        listeResultats.innerHTML += item; 

    }); 

 


     
}; // Fermeture de displayDetails




