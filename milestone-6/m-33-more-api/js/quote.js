const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = (quoteObject) => {
    const parentDiv = document.getElementById('quote-parent');
    parentDiv.innerText = quoteObject.quote;
}
