// Задача № 1
function parseCount(value){
    let result = Number.parseFloat(value);
    if(Number.isNaN(Number.parseFloat(value))){
        throw new Error("Невалидное значение")
    } 
    return result;
}

function validateCount(value){
    try{
        return parseCount(value);
    }
    catch (error){
        return error;
    }
}

//Задача № 2
class Triangle{
    constructor(a, b, c){
		this.a = a;
		this.b = b;
		this.c = c;
    
        if((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b){
            throw new Error("Треугольник с такими сторонами не существует");
            }
        }
        getPerimeter() {
            return +(this.a + this.b + this.c);
        }
        getArea() {
            const p = this.getPerimeter() / 2;
            return +(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3));
        }
    }
   
    function getTriangle(a, b, c) {
        try {
            return new Triangle(a, b, c);
          } catch (error) {
            return {
                getArea: () => "Ошибка! Треугольник не существует",
                getPerimeter: () => "Ошибка! Треугольник не существует",
            }
            
    }
}
