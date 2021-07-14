const cardInner = document.querySelector('.card__inner');
const card = document.querySelector('.card');

card.addEventListener('click', function() {
    cardInner.classList.toggle('is-flipped');
    card.classList.toggle('card_changer');
    document.body.classList.toggle("body_changer");
});