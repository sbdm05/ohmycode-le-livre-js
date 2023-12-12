console.log('connecté'); 

// Accès à un élément existant dans le DOM 
// par l'intermédiaire de document
//document.element; 

// Je sélectionne et je stocke la DIV posts
let postsContainer  = document.querySelector('.posts'); 
console.log(postsContainer);

const post = {
    titre : "SEO, les bonnes pratiques", 
    hashtag : "#SEO", 
    extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
}

// J'accède à la valeur de la propriété titre
const t = post.titre; 
console.log(t); 

const utilisateur = {
    nom : "James Doe", // une chaine de caractères 
    age : 39 // un chiffre
}

// J'accède à la valeur de la propriété1
// let n = utilisateur.nom; 
// console.log(n); 

// Initialisation d'un tableau (array)





const posts =[
    {
        titre : "SEO, les bonnes pratiques", 
        hashtag : "#SEO", 
        extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, 
    {
        titre : "Bien débuter en référencement payant", 
        hashtag : "#référencement", 
        extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

    }, 
    {
        titre : "Content Marketing, les bons arguments", 
        hashtag : "#contentmarketing", 
        extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    }
]
console.log(posts); 

// Je passe en revue chaque élément du tableau
posts.forEach(item => {
   //console.log(item);

   // Création d'une DIV avec Template Strings
   const article = `
                        <div class="post">
                            <div class="post-titre"> ${item.titre}</div>
                            <div class="post-extrait">${item.extrait}</div>
                            <div class="post-hashtag">${item.hashtag}</div>
                        </div>
                   `
   console.log (article); 
      // Ajout de article dans la DIV dédiée postsContainer
      postsContainer.innerHTML += article; 
});


questions.forEach((item)=> {
    console.log(item, 'item');
}); 

