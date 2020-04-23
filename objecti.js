export class Roska {

    constructor(speed, type, position) {
        this.speed = speed;
        this.type = type;
        this.imageX;
        this.imageY;
        this.yPosition = -30;
        this.xPosition = position;

        switch (type) {
            case "sekajate": 
            this.imageX = 100;
            this.imageY = 100;
            break;
            case "energiajate": 
            this.imageX = 0;
            this.imageY = 100;
            break;
            case "biojate": 
            this.imageX = 100;
            this.imageY = 0;
            break;
            case "pahvi": 
            this.imageX = 0;
            this.imageY = 0;
            break;
            case "metalli": 
            this.imageX = 200;
            this.imageY = 0;
            break;
            default: this.color ="#FFF";
        }
    }

    

   
}
