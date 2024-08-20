// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
// the draw method. Demonstrate polymorphism using instances of these classes.
// Base class Shape
class Shape {
    draw() {
        console.log('Drawing a shape.');
    }
}
class Circle extends Shape {
   
    draw() {
        console.log('Drawing a circle.');
    }
}

class Rectangle extends Shape {

    draw() {
        console.log('Drawing a rectangle.');
    }
}

const shapes = [
    new Circle(),
    new Rectangle(),
    new Shape()
];

shapes.forEach(shape => shape.draw());
