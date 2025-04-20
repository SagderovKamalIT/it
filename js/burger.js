document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.js-burger');
  const burgerBtn = document.querySelector('.js-burger__btn');
  const closeBurgerBtn = document.querySelector('.js-close-burger'); // Кнопка закрытия
  const body = document.body;

  const BURGER_OPEN = 'burger__open';
  const BURGER_BTN_ACTIVE = 'burger-btn__open';
  const BODY_FIXED = 'body_fixed';

  // Переключение по кнопке бургер-меню
  burgerBtn.addEventListener('click', () => {
    burger.classList.toggle(BURGER_OPEN);
    burgerBtn.classList.toggle(BURGER_BTN_ACTIVE);
    body.classList.toggle(BODY_FIXED);
  });

  // Закрытие по клику на кнопку закрытия
  closeBurgerBtn.addEventListener('click', () => {
    burger.classList.remove(BURGER_OPEN);
    burgerBtn.classList.remove(BURGER_BTN_ACTIVE);
    body.classList.remove(BODY_FIXED);
  });

  // Закрытие по клику вне меню и кнопки
  document.addEventListener('click', (event) => {
    const clickInside = event.composedPath().includes(burger) || event.composedPath().includes(burgerBtn);
    if (!clickInside) {
      burger.classList.remove(BURGER_OPEN);
      burgerBtn.classList.remove(BURGER_BTN_ACTIVE);
      body.classList.remove(BODY_FIXED);
    }
  });
});
