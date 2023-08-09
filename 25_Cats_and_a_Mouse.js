function catAndMouse(x, y, z) {
    var catADistance = 0
    if (z > x) {
        catADistance = z - x
    }
    if (z < x) {
        catADistance = x - z
    }

    var catBDistance = 0
    if (z > y) {
        catBDistance = z - y
    }
    if (z < y) {
        catBDistance = y - z
    }

    var result = ""
    if (catADistance < catBDistance) {
        result = "Cat A"
    }
    if (catBDistance < catADistance) {
        result = "Cat B"
    }
    if (catBDistance == catADistance) {
        result = "Mouse C"
    }
    return result
}

var x = 1 
var y = 3
var z = 2

console.log(catAndMouse(x, y, z))