const startBtn = document.getElementById('startBtn');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

startBtn.addEventListener('click', () => {
    // Fade out Slide 1
    slide1.style.opacity = '0';
    
    setTimeout(() => {
        slide1.style.display = 'none';
        // Show Slide 2
        slide2.classList.add('active-slide');
    }, 800);
});
