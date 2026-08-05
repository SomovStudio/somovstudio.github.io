$(function() {
    // Создаем фоновые пузырьки
    const backgroundBubbles = document.getElementById('backgroundBubbles');
    
    for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bg-bubble');
        
        // Случайный размер
        const size = Math.random() * 30 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Случайная позиция
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.top = `-50px`;

        // Случайная задержка анимации
        bubble.style.animationDelay = `${Math.random() * 15}s`;
        
        // Случайная продолжительность анимации
        const duration = 15 + Math.random() * 10;
        bubble.style.animationDuration = `${duration}s`;
        
        backgroundBubbles.appendChild(bubble);
    }
});