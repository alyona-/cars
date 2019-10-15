const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
car = document.createElement('div');
car.classList.add('car');

const keys = {
  ArrowUp : false,
  ArrowDown : false,
  ArrowRight : false,
  ArrowLeft : false
};


const startGame =() =>{
   start.classList.add('hide');
   setting.start = true;
   gameArea.appendChild(car);
   requestAnimationFrame(playGame);
};
const playGame =() =>{
    console.log("Play Game");
    if(setting.start) {
        requestAnimationFrame(playGame);
    }

};
const startRun = (event) => {
   event.preventDefault();
  console.log(event.key);
    keys[event.key] = true;

};
const setting = {
  start: false,
  score: 0,
  speed: 3
};



const stopRun = (event) => {
    event.preventDefault();
    console.log(event.key);
    keys[event.key] = false;
};
//срабатывает когда на клавиатуре нажимается любая клавиша
document.addEventListener('keydown', startRun);

//событие отпускания клавиши
document.addEventListener('keyup', stopRun);

start.addEventListener('click', startGame);