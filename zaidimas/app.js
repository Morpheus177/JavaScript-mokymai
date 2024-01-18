const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // Keletas korteles
let shuffledCards = [];

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

io.on('initialize', ({ shuffledCards }) => {
    const gameContainer = document.getElementById('game-container');

    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerText = '?';
        cardElement.addEventListener('click', () => selectCard(index));

        gameContainer.appendChild(cardElement);
    });
});

io.on('revealCards', ({ index1, index2 }) => {
    const cards = document.getElementsByClassName('card');
    cards[index1].innerText = '?';
    cards[index2].innerText = '?';
});

io.on('matchCards', ({ index1, index2 }) => {
    const cards = document.getElementsByClassName('card');
    cards[index1].innerText = shuffledCards[index1];
    cards[index2].innerText = shuffledCards[index2];
});

function selectCard(index) {
    socket.emit('selectCard', index);
}


io.on('connection', (socket) => {
    shuffledCards = shuffleArray([...cards, ...cards]); // Sukurkite naują kortelių maišytą masyvą

    socket.emit('initialize', { shuffledCards });

    let selectedCards = [];

    socket.on('selectCard', (index) => {
        if (selectedCards.length < 2) {
            selectedCards.push({ index, value: shuffledCards[index] });

            if (selectedCards.length === 2) {
                const [firstCard, secondCard] = selectedCards;

                if (firstCard.value === secondCard.value) {
                    // Kortos sutapo
                    io.emit('matchCards', { index1: firstCard.index, index2: secondCard.index });
                } else {
                    // Kortos nesutapo, atidengiame jas
                    io.emit('revealCards', { index1: firstCard.index, index2: secondCard.index });
                }

                selectedCards = [];
            }
        }
    });
});

http.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
