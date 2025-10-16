window.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  if (!board) return;

const box = board.querySelectorAll("div");
box.forEach(box => box.classList.add("square"));

  let currentPlayer = 'X';
const state = Array(9).fill(null);

box.forEach((box, i) => {
  box.textContent = 'currentPlayer';
  box.classList.remove('X', 'O');
  box.classList.add('currentPlayer');
  
  state[i] = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  });
});
  