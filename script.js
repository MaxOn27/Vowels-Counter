const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const vowels = 'aeiouAEIOU';
    let vowelCounter = 0;

    let text = document.querySelector('.text');
    for (let index = 0; index <= text.value.length; index++) {
        if (vowels.indexOf(text.value[index]) !== -1) {
            vowelCounter +=1;
        }
    }

    text.value = '';

    alert(vowelCounter);
});