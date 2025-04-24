const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.querySelector('.js-popup');
const btnOpenNodes = document.querySelectorAll('.js-btn, .js_btn');
const popupContentNode = document.querySelector('.js-popup__content')
const btnCloseNode = document.querySelector('.js-popup__close-btn');

btnOpenNodes.forEach(btn => {
  btn.addEventListener('click', togglePopup);
});
btnCloseNode.addEventListener('click', togglePopup);

popupNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(popupContentNode)

    if (isClickOutsideContent) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}

btnHeaderOpenNode.addEventListener('click', togglePopup);
btnCloseNode.addEventListener('click', togglePopup);
