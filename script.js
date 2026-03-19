const startBtn = document.getElementById('startBtn');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

startBtn.addEventListener('click', () => {
    // 1. Fade out the Burgundy Slide
    slide1.classList.add('fade-out');

    // 2. Fade in the Cat & Flower Slide
    // (CSS handles the delay so the flowers are visible immediately upon fade-in)
    slide2.classList.add('fade-in');
});
