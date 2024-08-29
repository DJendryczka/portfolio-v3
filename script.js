const container = document.querySelector('.grid-scroll');

container.addEventListener('wheel', (event) => {
  // Prevent the default vertical scroll behavior
  event.preventDefault();

  // Scroll horizontally based on the vertical scroll amount
  container.scrollLeft += event.deltaY;
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});