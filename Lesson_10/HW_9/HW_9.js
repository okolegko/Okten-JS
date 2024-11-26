const PRICE_KEY = 'price';
const TIME_KEY = 'lastUpdateTime';

const now = Date.now();

let currentPrice = localStorage.getItem(PRICE_KEY) || 100;
let lastUpdateTime = localStorage.getItem(TIME_KEY);

if (!lastUpdateTime || now - lastUpdateTime > 10000) {
  currentPrice = +currentPrice + 10;
  localStorage.setItem(PRICE_KEY, currentPrice);
  localStorage.setItem(TIME_KEY, now);
}

document.getElementById('priceBlock').innerText = `${currentPrice} грн`;
