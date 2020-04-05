import { Roska } from './objecti.js';

const canvas = document.getElementById("roskapeli");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#003";


function randomPosition() {
   return Math.floor(Math.random() * (canvas.width -50));
}
const laji = ["sekajate", "energiajate", "biojate", "paperi", "pahvi"];

function randomType() {
    return laji[Math.floor(Math.random() * 5)];
}

let time= 5;
let roskat = [];
let missed = 0;
let points = 0;


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
    })
});

let drawroska = () => {
    let remove = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillText(points,20,40);
    roskat.forEach((kakka) => {
        if (missed >= 10) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillText("Game End", 60, 50); 
        }
    else if (kakka.yPosition !== (canvas.height - 50) && missed < 11) {
        
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
}



setInterval(addRoska, 3000);
setInterval(drawroska, 100);





