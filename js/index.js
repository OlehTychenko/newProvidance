// Add toggle fucntion for changing classes in plan section

const CHANGE_COMPANY_FOCUS = () => {
    COMPANY.classList = ('plan__toggle-focused');
    INDIVIDUAL.classList = ('plan__toggle-unfocused');
}

const CHANGE_INDIVIDUAL_FOCUS = () => {
    COMPANY.classList = ('plan__toggle-unfocused');
    INDIVIDUAL.classList = ('plan__toggle-focused');
}

const INDIVIDUAL = document.getElementById('individual__toggle')
const COMPANY = document.getElementById('company__toggle')

COMPANY.onclick = CHANGE_COMPANY_FOCUS;
INDIVIDUAL.onclick = CHANGE_INDIVIDUAL_FOCUS;

// Add toggle fucntion for changing classes in plan section

// Add toggle fucntion for changing classes in plan section (cards)

const CHANGE_STARTER_FOCUS = () => {
    PRO.classList = ('plan__item');
    PRO_BUTTON.classList = ('plan__item-confirm')
    STARTER.classList = ('plan__item plan__item-focused');
    STARTER_BUTTON.classList = ('plan__item-confirm plan__item-confirm-focused');
}

const CHANGE_PRO_FOCUS = () => {
    STARTER.classList = ('plan__item');
    STARTER_BUTTON.classList = ('plan__item-confirm')
    PRO.classList = ('plan__item plan__item-focused');
    PRO_BUTTON.classList = ('plan__item-confirm plan__item-confirm-focused');
}

const STARTER = document.getElementById('starter__toggle')
const PRO = document.getElementById('pro__toggle')

const STARTER_BUTTON = document.getElementById('started__button')
const PRO_BUTTON = document.getElementById('pro__button')

STARTER.onclick = CHANGE_STARTER_FOCUS;
PRO.onclick = CHANGE_PRO_FOCUS;

// Add toggle fucntion for changing classes in plan section (cards)

// Hamburger

const HAMBURGER = document.getElementById('hamburger');
const NAV_LEFT = document.getElementById('nav__left-side');
const NAV_RIGHT = document.getElementById('nav__right-side');

HAMBURGER.addEventListener('click', () => {
    NAV_LEFT.classList.toggle('show');
    NAV_RIGHT.classList.toggle('show');
});