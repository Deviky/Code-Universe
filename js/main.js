const menuSwitcherButton = document.querySelector('.menu');
const navigation = document.querySelector('.nav__list');
menuSwitcherButton.addEventListener('click', (e) => {
    navigation.classList.toggle('nav__list--opened');
    menuSwitcherButton.classList.toggle('menu--opened');
});

navigation.querySelectorAll('.nav__s').forEach(link => {
    link.addEventListener('click', e => {
        navigation.classList.toggle('nav__list--opened');
        menuSwitcherButton.classList.toggle('menu--opened');
    })
})