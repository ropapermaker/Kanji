// This is the configuration file for Kanji startpage. Basic settings are here.

var data = {

    // -------------------------------------------------
    // Greetings config. Change greetings from here

    g1: "おやすみなさい", // From 23:00 to 5:00
    g2: "おはようございます", // Until 12:00
    g3: "こんにちは", // Until 17:00
    g4: "おやすみなさい", // Rest of the time

    // Font size of the greeting
    greeting_fontsize: "30px",
    // Foreground color of the greeting
    greeting_fgcolor: "#7ba5b5",

    // -------------------------------------------------
    // Clock config

    // Enable/disable clock
    clock: false,
    // Foreground color of the clock
    clock_fgcolor: "#7ba5b5",
    // Font size of the clock
    clock_fontsize: "20px",

    // -------------------------------------------------
    // Change image proprieties from here

    // Border radius: set it to 50% to create a circle
    image_radius: "5%",
    // Border for the image
    image_border: "5px solid",
    // Color of the border default: #ba8991
    image_bordercolor: "#7ba5b5",
    // Filters for the image.
    image_filter: "grayscale(56%) brightness(60%)",
    // Width/height for the image
    image_width: "350px",
    // Width/height for the image on mobile
    image_width_mobile: "150px",
    // Image source: you can use local files, or a link
    // Ex.: image_source: "/img/kanji.jpg"
    image_source: "./img/corpo-mente.jpg",

    // -------------------------------------------------
    // Enable/disable site icons
    enable_icons: false,

    // -------------------------------------------------
    // Page title
    title: "ここから始める",

    // -------------------------------------------------
    // Change search bar proprietis from here
    // Search bar placeholder
    search_placeholder: "Search ",
    // Search engine
    // Possible choices: (case sensitive)
    // google
    // duckduckgo
    // qwant
    // startpage
    // ecosia
    // youtube
    search_engine: "duckduckgo"

}