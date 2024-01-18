const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const word = 'javascript'; // Galite pasirinkti kitą žodį
let guessedWord = Array(word.length).fill('_');
let incorrectGuesses = 0;

io.on('connection', (socket) => {
    socket.emit('initialize', { guessedWord, incorrectGuesses });

    socket.on('makeGuess', (guess) => {
        if (word.includes(guess)) {
            word.split('').forEach((letter, index) => {
                if (letter === guess) {
                    guessedWord[index] = guess;
                }
            });
        } else {
            incorrectGuesses++;
        }

        socket.emit('updateGame', { guessedWord, incorrectGuesses });

        if (!guessedWord.includes('_')) {
            io.emit('gameOver', { message: 'You win!' });
        } else if (incorrectGuesses >= 6) {
            io.emit('gameOver', { message: 'You lose! The word was: ' + word });
        }
    });
});

http.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
const questions = [
    { word: 'javascript', hint: 'A programming language' },
    { word: 'nodejs', hint: 'A JavaScript runtime' },
    // Pridėkite kitus klausimus pagal poreikį
  ];
  
  let currentQuestion = {};
  
  function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
  }
  
  function initializeGame() {
    currentQuestion = getRandomQuestion();
    guessedWord = Array(currentQuestion.word.length).fill('_');
    incorrectGuesses = 0;
    io.emit('initialize', { guessedWord, incorrectGuesses, hint: currentQuestion.hint });
  }
  
  // ...
  
  io.on('connection', (socket) => {
    initializeGame();
  
    socket.on('makeGuess', (guess) => {
      // ...
    });
  });
  