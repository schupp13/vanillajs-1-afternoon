board = [];
const resetAll = document.getElementsByClassName("reset");

function play(clickedId){

  const topRow = document.getElementsByClassName('top');
  const centerRow = document.getElementsByClassName('center');
  const bottomRow = document.getElementsByClassName('bottom');
  
  const leftCol = document.getElementsByClassName('left');
  const rightCol = document.getElementsByClassName('right');
  const middleCol = document.getElementsByClassName('middle');

  const leftAcross = document.getElementsByClassName('leftAcross');
  const rightAcross = document.getElementsByClassName('rightAcross');


  let playerSpan = document.getElementById('player');
  let clickedElement = document.getElementById(clickedId);


 

  function winner(sqr1, sqr2, sqr3){
    sqr1.classList.add("winner");
    sqr2.classList.add("winner");
    sqr3.classList.add("winner");
    setTimeout(()=>{alert(sqr1.innerText + " Won the game, Congratulations!")}, 100);
    board =[];
    setTimeout(()=>{reset();}, 200);
    setTimeout(()=>{document.body.innerHTML = '<div class="gameOver"><p>GAME OVER</p></div>'; document.create}, 300);
    
    
  }

  if(clickedElement.innerText === "" || clickedElement.innerText === undefined){
  if(playerSpan.innerText === 'X'){
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X';   
    board[clickedId] = 'X'
  }else{
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'; 
    board[clickedId] = 'O'  
  } 
}else{
  alert("Sorry, That square is already taken!");
} 

if(rightAcross[0].innerText !== "" && rightAcross[0].innerText === rightAcross[1].innerText && rightAcross[0].innerText === rightAcross[2].innerText){
winner(rightAcross[0], rightAcross[1], rightAcross[2]);
}

if(leftAcross[0].innerText !== "" && leftAcross[0].innerText === leftAcross[1].innerText && leftAcross[0].innerText === leftAcross[2].innerText){
  winner(leftAcross[0], leftAcross[1], leftAcross[2]);
  }

if(topRow[0].innerText !== "" && topRow[0].innerText === topRow[1].innerText && topRow[0].innerText === topRow[2].innerText){
  winner(topRow[0], topRow[1], topRow[2]);
  }

if(bottomRow[0].innerText !== "" && bottomRow[0].innerText === bottomRow[1].innerText && bottomRow[0].innerText === bottomRow[2].innerText){
  winner(bottomRow[0], bottomRow[1], bottomRow[2]);
  }

if(centerRow[0].innerText !== "" && centerRow[0].innerText === centerRow[1].innerText && centerRow[0].innerText === centerRow[2].innerText){
  winner(centerRow[0], centerRow[1], centerRow[2]);
  }

if(leftCol[0].innerText !== "" && leftCol[0].innerText === leftCol[1].innerText && leftCol[0].innerText === leftCol[2].innerText){
  winner(leftCol[0], leftCol[1], leftCol[2]);
  }

if(rightCol[0].innerText !== "" && rightCol[0].innerText === rightCol[1].innerText && rightCol[0].innerText === rightCol[2].innerText){
    winner(rightCol[0], rightCol[1], rightCol[2]);
}


if(middleCol[0].innerText !== "" && middleCol[0].innerText === middleCol[1].innerText && middleCol[0].innerText === middleCol[2].innerText){
  winner(middleCol[0], middleCol[1], middleCol[2]);
}

boardFull = true;
for(let i= 0; i< 9; i++){
  if(board[i] === undefined){
    boardFull = false
  }
}
if (boardFull === true) {
  setTimeout(()=>{alert("Cat's game, there is no winner");}, 100);    
  reset();
}



}
function reset(){
  
  for(let i = 0; i < resetAll.length; i++){
    resetAll[i].classList.remove("winner");
    resetAll[i].innerText = "";
  }
  board =[];
}

