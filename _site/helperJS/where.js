function customSmoothScrollExternal(selector) {
  const element = document.querySelector(selector);
  if (element) {
    const offset = element.getBoundingClientRect().top;
    const initialPosition = window.scrollY;
    const targetPosition = offset + initialPosition;
    const duration = 1000; // Adjust this value to control the scroll speed (in milliseconds)
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);
      window.scrollTo(0, initialPosition + progress * offset);

      if (currentTime < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
}

module.exports = {
  customSmoothScrollExternal,
};
