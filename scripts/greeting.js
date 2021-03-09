// Read config.json ----------------------------
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// Main ----------------------------------------
readTextFile("../config.json", function (text) {
    var data = JSON.parse(text);

    let today = new Date();
    let hour = today.getHours();

    var g1 = data.g1;
    var g2 = data.g2;
    var g3 = data.g3;
    var g4 = data.g4;
    var g5 = data.g5;
    var g6 = data.g6;

    let greetings = document.getElementById('greetings');

    if (hour >= 23 && hour < 5) {
        greetings.innerText = g1;
    } else if (hour >= 6 && hour < 12) {
        greetings.innerText = g2;
    } else if (hour >= 12 && hour < 17) {
        greetings.innerText = g3;
    } else {
        greetings.innerText = g4;
    }
});