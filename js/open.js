const toggles = document.querySelectorAll('.js-benefits__toggle');

toggles.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const content = document.querySelectorAll('.js-benefits__content')[index];
    content.classList.toggle('active');

    
    const img = btn.querySelector('img');
    img.classList.toggle('rotated');
  });
});
