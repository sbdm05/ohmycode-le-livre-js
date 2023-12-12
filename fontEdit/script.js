console.log('connecté'); 

// valeur par défaut
let size = 2
let point = 0

if (point > 4){
    document.write('GAGNE')
}else{
    document.write("PERDU");
}



btnPlus.addEventListener('click', ()=>{
  console.log("plus");

  
  if( size >= 7){
      title.style.fontSize = '7rem';
    }else{
        // on incrémente
        size = size + 1;
        title.style.fontSize = `${size}rem`;
  }
})

btnMinus.addEventListener("click", () => {
  console.log("moins");

  // on décrémente
  size = size - 1;
  title.style.fontSize = `${size}rem`; 
});

