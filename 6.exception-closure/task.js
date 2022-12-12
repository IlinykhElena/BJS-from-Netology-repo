// Задача № 1
function parseCount(value){
    let result;
    if(Number.isNaN(Number.parseFloat(value))){
        throw new Error("Невалидное значение")
    } else {
        result = Number.parseFloat(value);
    }
    return result;
}

function validateCount(value){
    let result;
    try{
        result = parseCount(value);
    }
    catch (error){
        result = error;
    }
    return result;
}

//Задача № 2
class Triangle{
    constructor(a, b, c){
		this.a = a;
		this.b = b;
		this.c = c;
        this._perimeter = perimeter;
        this._area = area;
    }
    sum(x, y) {
        let result = x + y;
        return result;        
    }
    exist(a, b, c){
        let result = true;
        if(sum(a, b) < c || this.sum(b, c) < a || this.sum(a, c) < b){
            throw new Error("Треугольник с такими сторонами не существует");
            result = false;
        }
        return result;
    }
    perimeter(a, b, c){
        let perimeter;
        if(exist = true){
            return perimeter = a + b + c;
        } else {
            throw new Error("Ошибка! Треугольник не существует");
        }
    }
    set perimeter(newPerimeter){
        try {
            return this._perimeter = perimeter(a, b, c);
        }
        catch(error){
            throw new Error("Ошибка! Треугольник не существует");
        }
    }
    get perimeter (){
        return this._perimeter;
    }
    areaOfTriangle(a, b, c) {
        let area;
        if (exist = true){
            const p = (a + b + c) / 2;
            let result = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
            area = result.toFixed(3);
        } else {
            throw new Error("Ошибка! Треугольник не существует");
        }
        return area;
    }
    set area(newArea){
        return this._area = areaOfTriangle(a, b, c);
        
    }
        
    get area(){
        return this._area;
    }

    getTriangle(a, b, c) {
        try {
            let triangle = new Triangle(a, b, c);
          } catch (error) {
            console.log(error);
          } finally{
            return triangle;
          }
    }
}
