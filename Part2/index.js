console.log(`The house always wins!`);

let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

function reset(){
  clearAll = document.getElementsByTagName('section');
  for(let i = 0; i < clearAll.length; i++){
    clearAll[i].setAttribute("style", "");
  }
}

function setCard(){
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
  console.log(card);
}