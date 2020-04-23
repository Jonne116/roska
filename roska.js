import { Roska } from './objecti.js';

const canvas = document.getElementById("roskapeli");
const ctx = canvas.getContext("2d");

if (window.innerWidth < 600) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
}

else {
    canvas.width = 400;
    canvas.height = 600;
}

const laji = ["sekajate", "energiajate", "biojate", "metalli", "pahvi"];
let roskat = [];
let missed = 0;
let points = 0;
let time = 2.5;
let newRoska = 2.5;
let roskaSpeedUp = 0.011;


function randomPosition() {
   return Math.floor(Math.random() * (canvas.width -30));
}


function randomType() {
    return laji[Math.floor(Math.random() * 5)];
}

function addRoska() {

let roska = new Roska(time, randomType(), randomPosition());
roskat.push(roska);

}

const buttonarray = document.querySelectorAll('button');
buttonarray.forEach((elem) => {
    elem.addEventListener("click", (elem)=> {
        console.log(roskat[0].type);
      if (elem.target.id === roskat[0].type) {
          points++;
          roskat.shift();
      }
      else {
          missed++;
      }
    })
});

let wasteImg = new Image();
wasteImg.src = "jätteet.png";

function drawroska() {
    
    let remove = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    roskat.forEach((kakka) => {
    ctx.fillStyle = kakka.color;

    if (missed >= 10) {
            ctx.fillStyle = "#555";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("Game End", 110, 100); 
        }

    else if (kakka.yPosition < (canvas.height - 50)) {
        
        ctx.drawImage(wasteImg, kakka.imageX, kakka.imageY, 100, 100, kakka.xPosition, kakka.yPosition, 50, 50);
        kakka.yPosition = kakka.yPosition + kakka.speed;
    }

    else {
        missed++;
        remove = true;
    }
  } );

  if (remove) {
      roskat.shift();
      remove = false;
  }
ctx.font = "20px Arial";
ctx.fillStyle = "#555";
ctx.fillText("Pisteet: " + points,20,40);
ctx.fillText("Huti: " + missed + "/10", (canvas.width - 100), 40)
time = time + 0.01;
newRoska = newRoska + roskaSpeedUp;

console.log(newRoska - time);

if (newRoska > (time + 0.04)) {
    addRoska()
    roskaSpeedUp = roskaSpeedUp + 0.00005;
    newRoska = time;    
}
}

setInterval(drawroska, 75);





