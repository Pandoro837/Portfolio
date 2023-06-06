const language = document.getElementById('language');

language.addEventListener('click', () => {
    let country = language.innerText;
    country = (country === 'ko') ? 'en' : 'ko';
    change_language(country);
    language.innerText = country;
});

/** 입력된 국가로 언어 번경 */
function change_language(country) {
    console.log(country);
}

const login = document.getElementById('login');

login.addEventListener('click', () => {
    console.log('login');
});