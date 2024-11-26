const input = document.getElementById('kgInput');
const resultDiv = document.getElementById('result');


input.oninput = function () {
  const kg = +this.value;
  if (kg) {
    resultDiv.innerText = `${kg} kg is equal to ${(kg * 2.2046226218487757).toFixed(15)} pounds`;
  } else {
    resultDiv.innerText = '';
  }
};
