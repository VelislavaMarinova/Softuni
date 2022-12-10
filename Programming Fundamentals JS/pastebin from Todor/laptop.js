class Laptop{
    constructor(info, quality){
        this.info = info;
        this.quality = quality;
        this.isOn = false;
        this.price = 800 - (this.info.age * 2) + (this.quality * 0.5); 
    }
 
    turnOn(){
        this.isOn = true;
        this.quality--;
        this.price -= 0.5;
    }
 
    turnOff(){
        this.isOn = false;
        this.quality--;
        this.price -= 0.5;
    }
 
    showInfo(){
        return JSON.stringify(this.info);
    }
    
    
}