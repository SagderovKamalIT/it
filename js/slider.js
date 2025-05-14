const leftBtnNode = document.querySelector('.js-slider__btn-left');
const rightBtnNode = document.querySelector('.js-slider__btn-right');
const sliderItemsNode = document.querySelector('.js-slider-items');
const sliderItemNodes = document.querySelectorAll('.js-slider-items .studentlife__slider-item');

let currentIndex = 0;
const intervalTime = 3000; 

function updateSlider() {
  const slideWidth = sliderItemNodes[0].offsetWidth;
  const offset = -currentIndex * slideWidth;
  sliderItemsNode.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= sliderItemNodes.length) {
    currentIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderItemNodes.length - 1;
  }
  updateSlider();
}

const autoSlide = setInterval(nextSlide, intervalTime);

leftBtnNode.addEventListener('click', () => {
  clearInterval(autoSlide); 
  prevSlide();
});

rightBtnNode.addEventListener('click', () => {
  clearInterval(autoSlide); 
  nextSlide();
});
