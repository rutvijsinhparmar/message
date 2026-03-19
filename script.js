const startBtn = document.getElementById('startBtn');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const cat = document.getElementById('cat-messenger');
const flowerContainer = document.querySelector('.flower-container');

startBtn.addEventListener('click', () => {
    // 1. Switch Slides
    slide1.style.display = 'none';
    slide2.style.display = 'flex';

    // 2. Cat walks/slides up
    setTimeout(() => {
        cat.style.bottom = '20%';
    }, 100);

    // 3. After 2 seconds, cat fades out and flowers bloom
    setTimeout(() => {
        cat.style.opacity = '0';
        cat.style.transform = 'scale(0.8)';
        
        // Show the flowers and message
        flowerContainer.classList.add('show-content');
    }, 2100); 
});
