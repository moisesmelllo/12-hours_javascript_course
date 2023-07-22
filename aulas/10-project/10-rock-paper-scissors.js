    
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();

      /*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      }
      */

      let isAutoPlaying = false;
      let intervalId = null;

      function autoPlay() {
        if (!isAutoPlaying) {
          intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
        } else {
          buttonAutoElement.innerHTML = 'Auto Play';
          clearInterval(intervalId);
          intervalId = null;
          isAutoPlaying = false;
        }
      }

      buttonAutoElement = document.querySelector('.js-auto-button')

      buttonAutoElement.addEventListener('click', () => {
        buttonAutoElement.innerHTML = 'Stop Playing';
        autoPlay();
      }
      )

    resetButtonElement = document.querySelector('.js-reset-score-button');

    resetButtonElement.addEventListener('click', () => {
      const confirmation = confirm('Are you sure you want to reset the score?')
            if (confirmation) {
              score.wins = 0;
              score.losses = 0;
              score.ties = 0;
              localStorage.removeItem('score');
              updateScoreElement();
            }
          }
    )

    document.addEventListener('keydown', (event) => {
      if (event.key === 'a') {
          buttonAutoElement.innerHTML = 'Stop Playing';
          autoPlay();
      } 
  });

    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            const confirmation = confirm('Are you sure you want to reset the score?')
            if (confirmation) {
              score.wins = 0;
              score.losses = 0;
              score.ties = 0;
              localStorage.removeItem('score');
              updateScoreElement();
            }
            
        }});

    
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').
        innerHTML = result;

        document.querySelector('.js-moves').innerHTML
            = `You
              <img src="10-project/images/${playerMove}-emoji.png" class="move-icon">
              <img src="10-project/images/${computerMove}-emoji.png" class="move-icon">
              Computer`

      }

      function updateScoreElement() {
        document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }