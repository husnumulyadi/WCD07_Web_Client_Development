function findAreaRectangle(rectangle) {
    return rectangle.length * rectangle.width;
}
var params = { length: 5, width: 3 };
document.body.textContent = "Area: " + findAreaRectangle(params);
