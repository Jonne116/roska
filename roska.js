import { Roska } from './objecti.js';

const canvas = document.getElementById("roskapeli");
const ctx = canvas.getContext("2d");



const laji = ["sekajate", "energiajate", "biojate", "metalli", "pahvi"];
let roskat = [];
let missed = 0;
let points = 0;
let time = 2;


function randomPosition() {
   return Math.floor(Math.random() * (canvas.width -50));
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


function drawroska() {
    let remove = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    roskat.forEach((kakka) => {
    ctx.fillStyle = kakka.color;

    if (missed >= 10) {
            ctx.fillStyle = "#555";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("Game End", 150, 200); 
        }

    else if (kakka.yPosition < (canvas.height - 50)) {
        
        ctx.fillRect(kakka.xPosition, kakka.yPosition, 50, 50);
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
ctx.fillText("Huti: " + missed + "/10", 350, 40)
time = time + 0.001;
}


setInterval(addRoska, 3000);
setInterval(drawroska, 50);





