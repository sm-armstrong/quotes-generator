function generateQuote(event) {
    event.preventDefault();

    new Typewriter("#quote", {
    strings: "Do the best you can until you know better. Then when you know better, do better. - Maya Angelou",
    autoStart: true,
    delay: 1,
    cursor: "",
    });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
