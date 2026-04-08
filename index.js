function showMessage() {
  const msg = document.getElementById("secret");
  msg.style.display = "block";
  typeText();

  // Smooth scroll to the message container
  msg.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Optional: floating hearts (your existing code)
  for (let i = 0; i < 6; i++) {
    let heart = document.createElement("div");
    heart.className = "heart-float";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight - 50 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}
const firefliesContainer = document.querySelector('.fireflies');

function createFirefly() {
  const firefly = document.createElement('div');
  firefly.classList.add('firefly');

  // Random size between 6 and 12 px
  const size = Math.random() * 6 + 6;
  firefly.style.width = `${size}px`;
  firefly.style.height = `${size}px`;

  // Random start position
  firefly.style.left = Math.random() * window.innerWidth + 'px';
  firefly.style.top = Math.random() * window.innerHeight + 'px';

  // Random animation duration between 4s and 8s
  const duration = Math.random() * 4 + 4;
  firefly.style.animationDuration = `${duration}s`;

  // Random delay
  firefly.style.animationDelay = `${Math.random() * 4}s`;

  firefliesContainer.appendChild(firefly);

  // Remove after animation and respawn
  setTimeout(() => {
    firefly.remove();
    createFirefly();
  }, (duration + parseFloat(firefly.style.animationDelay)) * 1000);
}

// Spawn initial batch
for (let i = 0; i < 20; i++) {
  createFirefly();
}