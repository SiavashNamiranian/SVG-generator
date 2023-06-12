class Shape {}

Shape.prototype.isCircle = (Shape) => {

    if (Shape.cx && Shape.cy && Shape.r && r<cy && r<cx) {
        return true;
    }
    return false;
}

Shape.prototype.isSquare = (Shape) => {

    if(Shape.width === Shape.height) {
        return true;
    }
    return false;
}

Shape.prototype.isTriangle = (Shape) => {

    if (Shape.points.length ===3 ) {
        return true;
    }
    return false;
}


module.exports = Shape