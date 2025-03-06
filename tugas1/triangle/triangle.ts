interface Triangle{
    a: number
    b: number
}

function findAnglesOfTriangle(triangle: Triangle): number {
    return 180 - (triangle.a + triangle.b);
}

let input: Triangle = { a: 80, b: 65 };

document.body.textContent = "Output = " + findAnglesOfTriangle(input);