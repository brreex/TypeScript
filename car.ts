class Car {
    public name:string;
    public acceleration:number;

    constructor(name:string){
        this.name = name;
    }

    honk():void{
        console.log('{this.name} is saying Tooooooooot!!');
    }
    accelerate(speed:number):void{
        this.acceleration+=speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(80);
console.log(car.acceleration);