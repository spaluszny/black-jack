
let player = {
    name: 'Per',
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")
let cardReal = document.getElementById("real-cards")


playerEL.textContent = player.name + ' : ' + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    return randomNumber
    
    // if (randomNumber > 10) {
    //     return 10
    // } else if (randomNumber === 1) {
    //     return 11
    // } else {
    //     return randomNumber
    // }
}

function getRandomSuite(){
    let randomSuite = Math.floor(Math.random()* 4) +1
    return randomSuite
}



function startGame() {
    isAlive = true
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cardReal.innerHTML = "<img src='/playing-cards/" + getRandomSuite() + "-" + firstCard+".jpg'> <img src='/playing-cards/" + getRandomSuite() + "-" + secondCard +".jpg'>"
    console.log(cardReal.innerhtml)
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cardReal.innerHTML += " <img src='/playing-cards/" + getRandomSuite() + "-" + card+".jpg'>"
        sum += card
        cards.push(card)

        renderGame()        
    }
}
