//selecting Element
const scoreEl0 = document.getElementById('score--0'),
      scoreEl1 = document.getElementById('score--1'),
      currentEl0 = document.getElementById('current--0'),
      currentEl1 = document.getElementById('current--1'),
      playerEl0 = document.querySelector('.player--0'),
      playerEl1 = document.querySelector('.player--1'),
      imgDice = document.querySelector('.dice'),
      btnNew = document.querySelector('.btn--new'),
      btnRoll = document.querySelector('.btn--roll'),
      btnHold = document.querySelector('.btn--hold');

//restart HTML page
imgDice.classList.add('hidden');
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;

//creat variable to use in game
let scores = [0,0],
    currentScores = 0,
    activeplayer = 0,
    playing = true;

const switchPlayer = function(){
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScores = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
}
function winnerPlayer(){
  if(scores[activeplayer] >= 100){
    imgDice.classList.add('hidden');
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    playing = false
  } else {
    switchPlayer();
  }
    
}
btnRoll.addEventListener('click',function(){
  if(playing){
    //creat roll dice
    const dice = Math.trunc(Math.random()*6)+1;
    //display roll
    imgDice.classList.remove('hidden');
    imgDice.classList.remove('hidden');
    imgDice.classList.remove('hidden');
    imgDice.classList.remove('hidden');
    imgDice.classList.remove('hidden');
    imgDice.classList.remove('hidden');
    imgDice.src = `dice-${dice}.png`;
    //check dice number
    if(dice !== 1){
      currentScores+=dice;
      document.getElementById(`current--${activeplayer}`).textContent = currentScores
    } else{
      switchPlayer()
    }
  }
})

btnHold.addEventListener('click',function(){

  scores[activeplayer]+=currentScores;
  document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
  winnerPlayer();
})
btnNew.addEventListener('click',function(){
  playing = true;
  activeplayer = 0;
  currentScores = 0;
  scores = [0,0];
  imgDice.classList.add('hidden');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
})