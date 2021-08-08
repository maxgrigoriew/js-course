let input = document.querySelector('.input');
let btn = document.querySelector('.button');
let text = document.querySelector('.text');
    
let showText = () => {
    // text.textContent = localStorage.text;
    // text.textContent = sessionStorage.text;
    
    // выводим ключ
    text.textContent = localStorage.getItem('memory');
}

btn.addEventListener('click', () => {
    // localStorage.text = input.value;
    // sessionStorage.text = input.value;
    // создаем ключ
    localStorage.setItem('memory', input.value)
    showText();
});

// showText();