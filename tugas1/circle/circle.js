function findDiameterCircle(circle) {
    return circle.radius * 2;
}
function findAreaCircle(circle) {
    return Math.PI * Math.pow(circle.radius, 2);
}
function findCircumferenceCircle(circle) {
    return 2 * Math.PI * circle.radius;
}
var result = { radius: 5 };
var diameter = findDiameterCircle(result);
var circumference = findCircumferenceCircle(result).toFixed(4);
var area = Math.floor(findAreaCircle(result) * 1000) / 1000;
document.body.textContent = "diameter = " + diameter + ", circumference = " + circumference + ", area = " + area;
