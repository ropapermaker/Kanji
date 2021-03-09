// Set font size

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

    let greetings = document.getElementById('greetings');

    greetings.style.fontSize = data.greeting_fontsize;
    greetings.style.color = data.greeting_fgcolor;

    let image = document.getElementById('cover');

    image.style.borderRadius = data.image_radius;
    document.querySelector('.left').style.border = data.image_border;
    document.querySelector('.left').style.borderColor = data.image_bordercolor;
    image.style.filter = data.image_filter;
    image.style.width = data.image_width;
    image.style.height = data.image_width;
    document.querySelector('.left').style.width = data.image_width;
    document.querySelector('.left').style.height = data.image_width;

    let icons = document.querySelectorAll('a img');

    if (data.enable_icons == false) {
        for (var i = 0, max = icons.length; i < max; i++) {
            icons[i].remove();
        }
    }
});