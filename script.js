const container = document.querySelector('.grid-scroll');

container.addEventListener('wheel', (event) => {
  // Prevent the default vertical scroll behavior
  event.preventDefault();

  // Scroll horizontally based on the vertical scroll amount
  container.scrollLeft += event.deltaY;
});