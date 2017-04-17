class Person{
    @Property
    public static _firstName:string = "";
    constructor(){
    }
}

function Property(target:any,propertyName:any){
    var getter = function():any{
        return this.propertyName;
    }
    var setter = function(value:any){
        this.propertyName = value;
    }
    if(delete this.propertyName){
        Object.defineProperty(target,propertyName,{
            get:getter,
            set:setter,
            configurable:true
        });
    }
}

Person._firstName = "Berhanu";
console.log(Person._firstName);