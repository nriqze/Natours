'use strict'

// elements
/** Navigation */
const link = document.querySelectorAll('.navigation__link');
const navCheckbox = document.querySelector('.navigation__checkbox');

/** Close popup */
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

// functions
/** Navigation */
function checkMark() {
    navCheckbox.click();
};

/** Close popup */
function popupClose(e) {
    if(e.target === popup) closePopup.click();
}

// events
/** NAvigation */
link.forEach(link => link.addEventListener('click', checkMark));

/** Close popup */
popup.addEventListener('click', popupClose)