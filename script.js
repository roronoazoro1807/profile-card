// Add subtle interaction effects
const card = document.querySelector(".profile-card");
const followBtn = document.querySelector(".follow-btn");

followBtn.addEventListener("click", function () {
  this.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
  this.innerHTML = "Following ✓";

  setTimeout(() => {
    this.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    this.innerHTML = 'Follow <span class="plus-icon">+</span>';
  }, 2000);
});

// Add subtle parallax effect on mouse move
document.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const rotateX = (y / rect.height) * -10;
  const rotateY = (x / rect.width) * 10;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
});

document.addEventListener("mouseleave", () => {
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
});
