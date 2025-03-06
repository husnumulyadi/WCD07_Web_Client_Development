interface Rectangle {
    length: number;
    width: number;
}

function findAreaRectangle(rectangle: Rectangle): number {
    return rectangle.length * rectangle.width;
}

let params: Rectangle = { length: 5, width: 3 };

document.body.textContent = "Area: " + findAreaRectangle(params);
