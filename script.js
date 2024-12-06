document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('heart-container');
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 3 + 3 + 's';
      container.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  
    setInterval(createHeart, 300);
  });
  