function displayQuote(response) {
    console.log("quote generated")
    new Typewriter("#quote", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
        });
}

function generateQuote(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "a7d040o4fb53dfe38da1bd913t25290a";
    let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
    let context = "You are a Quotation expert and love to share inspiring and thought-provoking quotes. Your task is to generate a short quote, with appropriate citation, using basic HTML. The citation should be in a <strong> element. Make sure to follow the user instructions. Please behave.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden");
    quoteElement.innerHTML = `<div class="generating">⏲️ Generating a quote about ${instructionsInput.value}...</div>`;

    console.log("Generating quote")
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayQuote)
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
