window.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const box = board.querySelectorAll("#board > div");
  const statusBox = document.getElementById('status');

  box.forEach(box => box.classList.add("square"));
  
  let currentPlayer = 'X';
  const state = Array(9).fill(null);

  function checkWin() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]             
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        statusBox.textContent = 'Congratulations ' + state[a] + ' wins!';
        statusBox.classList.add('you-won');
        return true;
      }
    }
    return false;
  }

  const newGameButton = document.querySelector('.btn');
  newGameButton.addEventListener('click', () => {
    for (let i = 0; i < box.length; i++) {
      box[i].textContent = '';
      box[i].classList.remove("X", "O", "hover");
      state[i] = null;
    }

    statusBox.textContent = 'Move your mouse over a square and click to play an X or an O. ';
    statusBox.classList.remove('you-won');
    currentPlayer = 'X';
  });

  box.forEach ((box, index) => {
    box.addEventListener('mouseenter', () => {
      if (!state[index]) box.classList.add("hover");
    });
    box.addEventListener('mouseleave', () => {
      box.classList.remove("hover");
    });

    box.addEventListener('click', () => {
      if (state[index] ||  statusBox.classList.contains("you-won")) return;

      box.textContent = currentPlayer;
      box.classList.remove("X","O","hover");
      box.classList.add(currentPlayer);
      state[index] = currentPlayer;

      if (checkWin()) return;

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
  });
});