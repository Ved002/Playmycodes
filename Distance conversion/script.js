function distanceConverter(valNum) {
    var valNum = valNum*1.609;
    var n = valNum.toFixed(0);
    document.getElementById("outputKilometer").innerHTML = n;
}

