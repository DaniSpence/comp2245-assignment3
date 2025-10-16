window.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const box = board.querySelectorAll("#board > div");

  box.forEach(box => box.classList.add("square"));
  
  let currentPlayer = 'X';
  const state = Array(9).fill(null);

  box.forEach ((box, index) => {
    box.addEventListener('mouseenter', () => {
      if (!state[index]) box.classList.add("hover");
    });
    box.addEventListener('mouseleave', () => {
      box.classList.remove("hover");
    });

    box.addEventListener('click', () => {
      if (!state[index]) return;

      box.textContent = currentPlayer;
      box.classList.remove("X","O","hover");
      box.classList.add(currentPlayer);
      state[index] = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
  });
});