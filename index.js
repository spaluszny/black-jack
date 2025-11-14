
// let player = {
//     name: 'Per',
//     chips: 145
// }
let cards = []
let dealerCards = []
let sum = 0
let dealerSum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let dealerSumEl = document.getElementById("dealer-sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")
let cardReal = document.getElementById("real-cards")
let dealerCardsEl = document.getElementById("dealer-cards")
let stay = false
//let dealerEl = 

playerEL.textContent = player.name + ' : ' + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    return randomNumber

}

function getRandomSuite() {
    let randomSuite = Math.floor(Math.random() * 4) + 1
    return randomSuite
}

function getCardValue(number) {
    if (number > 10) {
        return 10
    } else if (sum < 11 && number === 1) {
        return 11
    } else {
        return number
    }
}

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    dealerSum = 0
    dealerSumEl.textContent = "Dealer: " + dealerSum
    dealerCardsEl.innerHTML = "<img src='./playing-cards/front.jpg' />"
    stay = false

    cardReal.innerHTML = "<img src='./playing-cards/" + getRandomSuite() + "-" + firstCard + ".jpg'> <img src='./playing-cards/" + getRandomSuite() + "-" + secondCard + ".jpg'>"
    console.log(cardReal.innerhtml)
    cards = [getCardValue(firstCard), getCardValue(secondCard)]
    sum = getCardValue(firstCard) + getCardValue(secondCard)
    renderGame()
}

function renderGame() {
    // cardsEl.textContent = "Cards: "
    // for (let i = 0; i < cards.length; i++) {
    //     cardsEl.textContent += cards[i] + " "
    // }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20 && stay === false) {
        message = "Do you want to draw a new card?"
    } else if (sum > dealerSum && stay && sum < 21 ) {
        message = "You won!"
        hasBlackJack = true
    }else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false && stay === false) {
        let card = getRandomCard()
        cardReal.innerHTML += " <img src='./playing-cards/" + getRandomSuite() + "-" + card + ".jpg'>"
        sum += getCardValue(card)
        cards.push(getCardValue(card))

        renderGame()
    }
}


function stayButton() {
    if (isAlive === true && hasBlackJack === false && stay === false) {
        let dealerFirstCard = getRandomCard()
        let dealerSecondCard = getRandomCard()
        dealerSum = getCardValue(dealerFirstCard) + getCardValue(dealerSecondCard)
        dealerSumEl.textContent = "Dealer: " + dealerSum

        dealerCardsEl.innerHTML = "<img src='./playing-cards/" + getRandomSuite() + "-" + dealerFirstCard + ".jpg'> <img src='./playing-cards/" + getRandomSuite() + "-" + dealerSecondCard + ".jpg'>"

        stay = true
        console.log(stay)
        renderGame()
    }
}
