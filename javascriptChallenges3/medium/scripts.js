function cutPizzaSlices(y){
    return function(x){
        var total = y/x
        console.log("Each person gets" + total + "slices of pizza")
    }
}

var sharePizza = cutPizzaSlices(8)(3)
console.log(cutPizzaSlices(3));

