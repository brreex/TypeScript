type rectangleType = {width:number,length:number,calcSize?:()=>number};

let baseObject:rectangleType = {
    width:0,
    length:0
};

let rectangle:rectangleType = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function(){
    return this.width*this.length;
}

console.log(rectangle.calcSize());