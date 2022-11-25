const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

const button1 = document.querySelector('#plusplayer1');
const button2 = document.querySelector('#plusplayer2');
const button3 = document.querySelector('#reset');
const num = document.querySelector('#num');

let b1 = 0;
let b2 = 0;
let winningScore = 3;
let isWin = false;

button1.addEventListener('click', function(){
        if(!isWin){
            b1 += 1;
        }
        if(b1===winningScore){
          isWin=true;
          player1.classList.add('has-text-success');
          player2.classList.add('has-text-danger');
          button1.disabled= true;
          button2.disabled= true;
        }
            player1.textContent = b1;
           

           
})

button2.addEventListener('click', function(){
    
    if(!isWin){
        b2 += 1;
    }
    if(b2===winningScore){
      isWin=true;
      player2.classList.add('has-text-success');
      player1.classList.add('has-text-danger');
      button1.disabled= true;
      button2.disabled= true;

    }
        player2.textContent = b2;
     
})

button3.addEventListener('click', reset) 

num.addEventListener('change', function(){
    winningScore= parseInt(this.value);
    reset();

})

function reset(){
    isWin = false;
    b1=0;
    b2=0;
    player1.textContent= '0';
    player2.textContent= '0';
    player1.classList.remove('has-text-success', 'has-text-danger');
    player2.classList.remove('has-text-success', 'has-text-danger');
    button1.disabled= false;
    button2.disabled= false;
}