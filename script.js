// Create falling hearts
function createHearts() {
    const container = document.querySelector('.hearts-container');
    const hearts = ['❤️', '💗', '💖', '💝', '🩷'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (2 + Math.random() * 2) + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }, 300);
}

// Position floating emojis
function positionEmojis() {
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach((emoji, index) => {
        emoji.style.left = (index * 25) + '%';
        emoji.style.top = (Math.random() * 50) + '%';
        emoji.style.animationDelay = (index * 0.5) + 's';
    });
}

// Trigger celebration
function triggerCelebration() {
    playSound();
    createConfetti();
    showWishes();
}

// Play celebration sound (using Web Audio API or simple alert)
function playSound() {
    // Create a simple beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Create confetti effect
function createConfetti() {
    const container = document.querySelector('.container');
    const confettiPieces = ['🎉', '🎊', '✨', '⭐', '🌟', '💫', '🎈', '🎁'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-50px';
        confetti.style.fontSize = (1.5 + Math.random()) + 'rem';
        confetti.style.zIndex = '100';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `celebrate ${2 + Math.random() * 1}s ease-in forwards`;
        confetti.style.animationDelay = (i * 0.1) + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Show wishes
function showWishes() {
    const wishes = [
        '🩷 You are amazing!',
        '✨ Have the best day ever!',
        '💝 You deserve all the happiness!',
        '🌟 Enjoy every moment!',
        '💗 You are special!',
        '🎉 Let\'s celebrate YOU!'
    ];
    
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    
    const wishBox = document.createElement('div');
    wishBox.textContent = randomWish;
    wishBox.style.position = 'fixed';
    wishBox.style.top = '50%';
    wishBox.style.left = '50%';
    wishBox.style.transform = 'translate(-50%, -50%)';
    wishBox.style.fontSize = '1.5rem';
    wishBox.style.color = '#0ff';
    wishBox.style.textShadow = '0 0 10px #0ff, 0 0 20px #ff1493';
    wishBox.style.padding = '20px 40px';
    wishBox.style.border = '2px solid #0ff';
    wishBox.style.borderRadius = '10px';
    wishBox.style.background = 'rgba(0, 255, 255, 0.1)';
    wishBox.style.zIndex = '200';
    wishBox.style.animation = 'pulse 1s ease-in-out 3';
    wishBox.style.fontWeight = 'bold';
    
    document.body.appendChild(wishBox);
    
    setTimeout(() => wishBox.remove(), 3000);
}

// Add keyboard interaction
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        triggerCelebration();
    }
});

// Initialize
window.addEventListener('load', () => {
    createHearts();
    positionEmojis();
    
    // Auto trigger celebration every 10 seconds
    setInterval(triggerCelebration, 12000);
});