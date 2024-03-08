const colors = ['white', 'green', 'purple'];
const title = document.querySelector('.title');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    title.style.color = colors[i];
  });
})
