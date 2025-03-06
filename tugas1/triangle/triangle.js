function findAnglesOfTriangle(triangle) {
    return 180 - (triangle.a + triangle.b);
}
var input = { a: 80, b: 65 };
document.body.textContent = "Output = " + findAnglesOfTriangle(input);
