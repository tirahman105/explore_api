const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote =>{
    // console.log(quote);
    const blockQuote = document.getElementById('quote');
    // blockQuote.innerText = quote.quote;
    const div = document.createElement('div');
    blockQuote.innerHTML= `
    <h1>${quote.quote}</h1>
    `;

    blockQuote.appendChild(div);
}
loadQuotes();