const MISTRAL_API_KEY = 'VOTRE API KEY';
const MISTRAL_URL = 'https://api.mistral.ai/v1/chat/completions';

// Appel dès l'ouverture de la page
get_positionGPS();

// Génération de nouvelles idées au clic sur le bouton
refresh.addEventListener('click', get_positionGPS);

// on récupère les données GPS de l'utilisateur
// et on déclenche get_meteo_du_jour()
function get_positionGPS() {
  if (!navigator.geolocation) {
    resultat.innerHTML =
      "La géolocalisation n'est pas supportée par ce navigateur.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position_gps) => {
      //console.log(position_gps);
      // on stocke
      const lat = position_gps.coords.latitude;
      const lng = position_gps.coords.longitude;
      // je vérifie le contenu des variables
      // console.log(lat, lng);
      // j'envoie les données à l'API pour obtenir la météo du jour
      get_meteo_du_jour(lat, lng);
    },
    (error) => {
      resultat.innerHTML =
        'Un problème est survenu lors de votre géolocalisation';
    },
  );
}

//appel vers l'API de Open Meteo
async function get_meteo_du_jour(lat, lng) {
  console.log(lat, lng);
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m&forecast_days=1`;
  //const URL = `https://api.open-meteo.com/v1/forecast?latitude=21.27&longitude=-157.82&hourly=temperature_2m`;

  try {
    const reponseJSON = await fetch(URL);
    console.log(reponseJSON);

    // gestion des réponses négatives
    if (!reponseJSON.ok) {
      throw new Error();
    }
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);

    // Si pas d'erreur, on appelle l’IA
    getIdeas(reponseJS, lat, lng);
  } catch (error) {
    resultat.innerHTML = 'Le service météo est indisponible pour le moment.';
  }
}

// appel vers l'IA Mistral
async function getIdeas(meteo_du_jour, lat, lng) {
  const messages = {
    model: 'mistral-small-latest',
    max_tokens: 300,
    temperature: 0,
    messages: [
      {
        role: 'system',
        // max_tokens supprimé d'ici - il n'appartient pas au message
        content: `Tu es un guide touristique local, créatif et enthousiaste.  
          À partir des coordonnées latitude ${lat} et longitude ${lng}, propose 3 activités originales et amusantes dans un périmètre de 5km.

          Règles de sortie :  
          - Commence par le nom de la ville suivi de la météo du jour en moins de 5 mots.  
          - Ajoute ensuite deux sauts de ligne HTML <br><br>.  
          - Donne exactement 3 activités, chacune :  
            - Chaque activité doit commencer par un emoji représentatif.
            - rédigée en UNE phrase complète,  
            - limitée à 100 caractères maximum,  
            - séparée des autres par deux sauts de ligne HTML <br><br>.  
          - Ne coupe jamais les phrases.  
          - Respecte exactement la mise en forme demandée.
        `,
      },
      {
        role: 'user',
        content: `Voici les données météo: ${JSON.stringify(
          meteo_du_jour,
        )}. Que me conseilles-tu ?`,
      },
    ],
  };
  try {
    // dans la fonction getIdeas()
    const reponseJSON = await fetch(MISTRAL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${MISTRAL_API_KEY}`,
      },
      body: JSON.stringify(messages),
    });

    // Gestion des erreurs
    if (!reponseJSON.ok) {
      throw new Error();
    }
    // si pas d'erreur on poursuit
    const reponseJS = await reponseJSON.json();

    const ideesIA = reponseJS.choices[0].message.content;

    // on affiche le résultat dans la page
    resultat.innerHTML = ideesIA;
  } catch (error) {
    resultat.innerHTML = error;
  }
}
