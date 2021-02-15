const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const backBtn = document.querySelector('#back-btn');
const modalOptions = document.querySelector('.pledges');
const closeModalBtn = document.querySelector('#close-modal-btn');

const options = document.querySelectorAll('.modal-option');
const radioButtons = document.querySelectorAll('input[type="radio"]');

let showMenu = false;

//toggling hambuerger
const toggleMenu = () => {
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}


//open/close modal window with options
const openOptionsModal = () => {
modalOptions.classList.add('open');
body.classList.add('modal-open');
main.classList.add('modal-open');
header.classList.add('modal-open');
}
const closeOptionsModal = () =>{
modalOptions.classList.remove('open');
body.classList.remove('modal-open');
main.classList.remove('modal-open');
header.classList.remove('modal-open');
}

//selecting pledge 
const onCheck = (e) => {
    let targetOption = e.target.value;
    console.log(targetOption);
    console.log(options);
    for(let i = 0; i < options.length; i++){
        if(i == targetOption){
            // radioButtons[i].prop(checked, true);
            options[i].classList.add('selected');
            console.log('this was selected', i);
        } else {
            console.log(radioButtons[i]);
            radioButtons[i].checked = false;
            options[i].classList.remove('selected');
        }
    }   
    
}

//event listeners
menuBtn.addEventListener('click', toggleMenu);
backBtn.addEventListener('click', openOptionsModal);
closeModalBtn.addEventListener('click', closeOptionsModal);

radioButtons.forEach(radio => {
    radio.addEventListener('change', onCheck);
})