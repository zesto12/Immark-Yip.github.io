// Example: Simple Alert for Navigation Click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    alert("You clicked a section link!");
  });
});