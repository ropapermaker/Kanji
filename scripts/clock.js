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
    var date = new Date();

    const label = document.getElementById('date');
    label.style.color = data.clock_fgcolor;
    label.style.fontSize = data.clock_fontsize;
    const clock = () => {
        label.innerHTML = '<span>' + date.getHours() + ':' + date.getMinutes() + '</span>';
        setTimeout(clock, 1000);
    };

    if (data.clock == true) {
        window.onload = clock();
    } else {
        console.log('clock is disabled');
    }
});