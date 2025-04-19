const leftBtnNode = document.querySelector('.js-slider__btn-left');
const rightBtnNode = document.querySelector('.js-slider__btn-right');
const sliderItemsNode = document.querySelector('.js-slider-items');
const sliderItemNodes = document.querySelectorAll('.js-slider-items .studentlife__slider-item');

let currentIndex = 0;

function updateSlider() {
  const slideWidth = sliderItemNodes[0].offsetWidth;
  const offset = -currentIndex * slideWidth;
  sliderItemsNode.style.transform = `translateX(${offset}px)`;
}

leftBtnNode.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderItemNodes.length - 1; // переход к последнему
  }
  updateSlider();
});

rightBtnNode.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= sliderItemNodes.length) {
    currentIndex = 0; // переход к первому
  }
  updateSlider();
});
