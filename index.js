/*const user = {
    name: "jay",
    age: 21,
}*/
class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console.log('painting with color ' + this.color);
    }
}

const rect = new Rectangle(2,4, "red");
console.log(rect.width);
console.log(rect.height);
const area = rect.area();
console.log(area);
rect.paint();
const d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
console.log(d.getDay());