// animation.js
document.addEventListener("DOMContentLoaded", () => {
  // Select the ball element. Adjust the selector as needed.
  const ball = document.querySelector(".ball");
  if (ball) {
    // Attach a GSAP animation to the ball.
    gsap.to(ball, { x: 100, duration: 1, ease: "power3.out" });
  }
});

