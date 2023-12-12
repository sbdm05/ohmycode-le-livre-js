console.log('connecté'); 
// Je stocke et je sélectionne
const form = document.getElementById('form'); 
console.log(form); 
const todo = document.getElementById('todo'); 
console.log(todo); 
let listItems = document.querySelector('.list-items'); 
console.log(listItems); 


form.addEventListener('submit', function(e){
    e.preventDefault(); 
    console.log('bouton cliqué'); 
    const todoValue = todo.value; 
    console.log(todoValue); 

    // Je crée l'élément
    let item = `
                    <div class="item">
                        <p>${todoValue}</p>
                        <button class="btn-delete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="btn-archive">
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
               `

    // Je place tous les items dans listItems 
    listItems.innerHTML += item;

    // Je sélectionne tous les boutons btn-delete existants dans la page
    const btnDelete = document.querySelectorAll('.btn-delete'); 
    console.log(btnDelete); 
    btnDelete.forEach(i => {
        console.log('btn-delete'); 

        // Au clic sur bouton supprimer
        i.addEventListener('click', function(){
            console.log('btn-delete cliqué');
             // J'enlève l'élément parent
             i.parentElement.remove();  
        }); 
    }); // Fermeture de btnDelete.forEach



    // Je sélectionne tous les boutons btn-archive existants dans la page
    const btnArchive = document.querySelectorAll('.btn-archive'); 
    console.log(btnArchive); 

    btnArchive.forEach(i => {
        console.log('btn-archive'); 
        i.addEventListener('click', function(){
            // Je cible l'élément parent de i
            //const parent = i.parentElement; 
            // J'agis sur la DIV parent (class item)
            i.parentElement.classList.toggle('done'); 
        }); 
    }); 

    // Réinitialiser le formulaire
    form.reset(); 



}); // fermeture de form.addEventListener



           


        



