interface Circle{
    radius: number;
}

function findDiameterCircle(circle: Circle): number {
    return circle.radius * 2;
}

function findAreaCircle(circle: Circle): number {
    return Math.PI * circle.radius ** 2;
}

function findCircumferenceCircle(circle: Circle): number {
    return 2 * Math.PI * circle.radius;
}

let result: Circle = { radius: 5 };

let diameter = findDiameterCircle(result);
let circumference = findCircumferenceCircle(result).toFixed(4);
let area =  Math.floor(findAreaCircle(result) * 1000) / 1000;

document.body.textContent = "diameter = " + diameter + ", circumference = " + circumference + ", area = " + area;