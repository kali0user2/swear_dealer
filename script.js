let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart').innerText = "🛒 " + cartCount;
}

// Cambio slogan automatico
const slogans = [
    "Streetwear for the fearless.",
    "No rules, just legacy.",
    "Swear Dealer: Hardcore from the underground."
];

let sloganIndex = 0;
setInterval(() => {
    sloganIndex = (sloganIndex + 1) % slogans.length;
    document.getElementById('changing-text').innerText = slogans[sloganIndex];
}, 4000);
