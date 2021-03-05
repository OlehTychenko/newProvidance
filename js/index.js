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

// Add toggle fucntion for changing classes in plan section

const CHANGE_STARTER_FOCUS = () => {
    PRO.classList = ('plan__item');
    STARTER.classList = ('plan__item plan__item-focused');
}

const CHANGE_PRO_FOCUS = () => {
    STARTER.classList = ('plan__item');
    PRO.classList = ('plan__item plan__item-focused');
}

const STARTER = document.getElementById('starter__toggle')
const PRO = document.getElementById('pro__toggle')

STARTER.onclick = CHANGE_STARTER_FOCUS;
PRO.onclick = CHANGE_PRO_FOCUS; 

// Add toggle fucntion for changing classes in plan section