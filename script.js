const inputValue = document.getElementById('user-input');
const number = document.querySelectorAll('.number');
const calculate = document.querySelectorAll('.operations');

number.forEach((item) => {
  item.addEventListener('click', (e) => {
    const val = e.target.innerHTML.trim();

    // Ignore special operation buttons accidentally in .number
    if (val === 'AC' || val === 'DEL' || val === '=') return;

    if (inputValue.innerText === 'NaN' || inputValue.innerText === 'Error') {
      inputValue.innerText = '';
    }

    if (inputValue.innerText === '0') {
      inputValue.innerText = '';
    }

    inputValue.innerText += val;
  });
});

calculate.forEach((item) => {
  item.addEventListener('click', (e) => {
    const value = e.target.innerHTML.trim();

    if (value === 'AC') {
      inputValue.innerText = '0';
      return;
    }

    if (value === 'DEL') {
      inputValue.innerText = inputValue.innerText.slice(0, -1) || '0';
      return;
    }

    if (value === '=') {
      try {
        inputValue.innerText = eval(inputValue.innerText);
      } catch {
        inputValue.innerText = 'Error';
      }
      return;
    }

    // Add operator
    inputValue.innerText += value;
  });
});
