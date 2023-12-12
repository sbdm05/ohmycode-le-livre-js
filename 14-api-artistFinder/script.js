async function getImg() {
  // console.log('test depuis getImg');
  try {
    const reponseJSON = await fetch(
      'you-api-key'
    );
    console.log(reponseJSON, 'reponseJSON');

    // Je transforme en JS
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);

    // J'affiche les informations dans la page
    // J'utilise les Template Strings
    resultat.innerHTML = `   <img class="img-artist" src="${
      reponseJS.urls.regular
    }" alt="${reponseJS.description}" />
                            <h1>Artiste : ${reponseJS.user.name}</h1>
                            <p>Découvrez son univers : 
                              ${
                                reponseJS.user.bio
                                  ? reponseJS.user.bio
                                  : 'Désolé, information manquante'
                              }
                            </p>
                            <div class="btn">
                              <a class="btn-insta" target="_blank"
                              href="https://instagram.com/${
                                reponseJS.user.instagram_username
                              }">
                                Je découvre sur Instagram
                              </a>
                            </div>
                        `;
  } catch (err) {
    //fermeture de try
    console.log(err, 'error');
  }
} // fermeture de getImg

getImg();

refresh.addEventListener('click', getImg);
