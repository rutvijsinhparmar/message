const startBtn = document.getElementById('startBtn');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const cat = document.getElementById('cat-messenger');
const flowerContainer = document.querySelector('.flower-container');

startBtn.addEventListener('click', () => {
    // Hide Slide 1
    slide1.style.display = 'none';
    
    // Show Slide 2
    slide2.style.display = 'flex';

    // 1. Cat slides up from bottom
    setTimeout(() => {
        cat.style.bottom = '50%';
    }, 100);

    // 2. After 2 seconds, cat fades and flowers appear
    setTimeout(() => {
        cat.style.opacity = '0';
        cat.style.transform = 'scale(0.5)';
        
        // Show the flowers and message
        flowerContainer.classList.add('show-flowers');
    }, 2100); 
});
