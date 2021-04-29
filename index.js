// Your code here
class Polygon {
    constructor(sides) {
        this._sides = sides
    }

    get countSides() {
        return this._sides.length
    }

    get perimeter() {
        return this._sides.reduce((accm,val) => {return accm + val },0)
    }
}

let p = new Polygon([3,4,5])

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            debugger
            const [a,b,c] = this._sides
            if (a < (b+c) && b < (c+a) && c < (a+b)) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            const [a,b,c,d] = this._sides
            if ( a === b && b === c && c === d ) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    get area() {
        return this._sides[0]**2
    }
}
