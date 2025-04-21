document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.js-burger');
  const burgerBtn = document.querySelector('.js-burger__btn');
  const closeBurgerBtn = document.querySelector('.js-close-burger');
  const body = document.body;

  const BURGER_OPEN = 'burger__open';
  const BURGER_BTN_ACTIVE = 'burger-btn__open';
  const BODY_FIXED = 'body_fixed';

  burgerBtn.addEventListener('click', () => {
    burger.classList.toggle(BURGER_OPEN);
    burgerBtn.classList.toggle(BURGER_BTN_ACTIVE);
    body.classList.toggle(BODY_FIXED);
  });

  closeBurgerBtn.addEventListener('click', () => {
    burger.classList.remove(BURGER_OPEN);
    burgerBtn.classList.remove(BURGER_BTN_ACTIVE);
    body.classList.remove(BODY_FIXED);
  });

  document.addEventListener('click', (event) => {
    const clickInside = event.composedPath().includes(burger) || event.composedPath().includes(burgerBtn);
    if (!clickInside) {
      burger.classList.remove(BURGER_OPEN);
      burgerBtn.classList.remove(BURGER_BTN_ACTIVE);
      body.classList.remove(BODY_FIXED);
    }
  });

  // 👇 Закрытие бургера при клике по ссылке
  const burgerLinks = burger.querySelectorAll('a');
  burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove(BURGER_OPEN);
      burgerBtn.classList.remove(BURGER_BTN_ACTIVE);
      body.classList.remove(BODY_FIXED);
    });
  });
});
