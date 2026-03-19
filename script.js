const startBtn = document.getElementById('startBtn');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

startBtn.addEventListener('click', () => {
    // Fade out first slide
    slide1.classList.add('hide');
    
    // Smooth transition to bouquet
    setTimeout(() => {
        slide1.style.display = 'none';
        slide2.classList.add('show');
    }, 800);
});
