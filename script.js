resultContainer = document.getElementById('result');
const form = document.getElementById('form');


form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await tronaldDump();
    
});

const tronaldDump = async () => {
    let response = await fetch('https://api.tronalddump.io/random/quote');
    let data = await response.json();
    console.log(data);


resultContainer.innerHTML = '';
let quote = document.createElement('h1');
quote.innerHTML = data.value;
resultContainer.appendChild(quote);
}