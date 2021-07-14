const cardInner = document.querySelector('.card__inner');
const card = document.querySelector('.card');
const cube = document.querySelector('.cube');

card.addEventListener('click', function() {
    cardInner.classList.toggle('is-flipped');
    card.classList.toggle('card_changer');
    document.body.classList.toggle("body_changer");
    cube.classList.toggle("show-right")
});