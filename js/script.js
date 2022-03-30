'use strict'

// ELEMENTS
/** Navigation */
const link = document.querySelectorAll('.navigation__link');
const navCheckbox = document.querySelector('.navigation__checkbox');

/** Close popup */
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

/** Scroll */
const btnScrollTours = document.querySelector('.btn--scroll-tours');
const btnScrollBook = document.querySelector('.btn--scroll-book-now');
const sectionTours = document.querySelector('.tours');
const sectionBook = document.querySelector('.book');


// FUNCTIONS
/** Navigation */
function checkMark() {
    navCheckbox.click();
};

/** Close popup */
function popupClose(e) {
    if(e.target === popup) closePopup.click();
}

/** scroll */
function scroll(elEv, el) {
    elEv.addEventListener('click', function(e) {
        e.preventDefault();
        if(elEv === btnScrollBook) closePopup.click();
        el.scrollIntoView({behavior: "smooth"});
    })
}


// EVENTS
/** NAvigation */
link.forEach(link => link.addEventListener('click', checkMark));

/** Close popup */
popup.addEventListener('click', popupClose);

/** Scroll */
scroll(btnScrollTours, sectionTours)
scroll(btnScrollBook, sectionBook)