export class Roska {

    constructor(speed, type, position) {
        this.speed = speed;
        this.type = type;
        this.color;
        this.yPosition = -30;
        this.xPosition = position;

        switch (type) {
            case "sekajate": 
            this.color ="#000";
            break;
            case "energiajate": 
            this.color ="#fc8405";
            break;
            case "biojate": 
            this.color ="#724200";
            break;
            case "pahvi": 
            this.color ="#29a521";
            break;
            case "metalli": 
            this.color ="#1f74e2";
            break;
            default: this.color ="#FFF";
        }
    }

    

   
}
