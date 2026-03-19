const startBtn = document.getElementById('startBtn');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

startBtn.addEventListener('click', () => {
    // Hide slide 1
    slide1.classList.add('hide');
    
    // After a short delay, show slide 2
    setTimeout(() => {
        slide1.style.display = 'none';
        slide2.classList.add('show');
    }, 800);
});
