console.log('connecté');

const item = document.querySelector('.banniere-titre');
console.log(item);

// fetch(url);
//developer.mozilla.org/en-US/docs/Web/API/Response/json
// https: fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((data) => console.log(data, 'data'));

// enAttente();

async function enAttente() {
  try {
    const reponseJSON = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS, 'objet Javascript');
    item.innerHTML = `<h1>${reponseJS.id} - ${reponseJS.title}</h1>
                          <p>Terminé : ${reponseJS.completed}</p>
                          `;
  } catch (error) {
    console.log(error, 'erreur');
  }
} // fermeture de enAttente();

rappelConso();

async function rappelConso() {
  try {
    const reponseJSON = await fetch(
      'https://data.economie.gouv.fr/api/v2/catalog/datasets/rappelconso0/records'
    );
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS.records, 'objet Javascript');
    reponseJS.records.forEach((item) => {
      console.log(item.record.fields.distributeurs);
    });
  } catch (error) {
    console.log(error, 'erreur');
  }
} // fermeture de rappelConso();

// data();
async function data() {
  // const data = require('./data.json');
  console.log(data);
  try {
    const reponseJSON = await fetch('http://127.0.0.1:5500/data.json');
    console.log(reponseJSON);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS, 'objet Javascript');
  } catch (error) {
    console.log(error, 'erreur');
  }
}
