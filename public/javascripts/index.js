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
};

/* modal */
const modals = document.getElementsByClassName('modal');
const login = document.getElementById('login');
let thumb = document.getElementById('project-thumb');

/** login modal click */
login.addEventListener('click', () => {
    let login_modal = document.getElementById('modal-login');
    modal_toggle(login_modal);
});

thumb.addEventListener('click', () => {
    let project_modal = document.getElementById('modal-project');
    modal_toggle(project_modal);
});

/** Modal 열기 */
function modal_toggle(modal) {
    modal.classList.toggle('active');
    //document.body.classList.toggle('modal-open')
};

/** modal 닫기 */
window.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        modal_toggle(e.target);
    }
});
