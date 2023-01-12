
let player={
    playerName:'Man',
    chips:145
}
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

let messageEl=document.getElementById('message-el')
let sumEl=document.getElementById('sum-el')
let cardEl=document.getElementById('cards-el')
let playerEl=document.getElementById('player-el')

// can also render with query selector(dynamic)
// syntax let sumEl=document.querySelector("#sum-el")
playerEl.textContent=player.playerName+" : $"+player.chips

function getRandomCard(){

    let ranVal= Math.floor(Math.random()*13)+1
    if(ranVal==1)
        return 11
    else if (ranVal==11|| ranVal==12|| ranVal==13)
        return 10
    else 
        return ranVal
}

function startGame(){
    isAlive=true
    firstCard=getRandomCard()
    secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    
    
    sum=cards[0]+cards[1]

    renderGame()
} 

function renderGame() {

    cardEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i] + "  "
    }
    // render out all cards

    sumEl.textContent="Sum: "+ sum
    // render out first and second card

  
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game!  "
        isAlive = false
       
    }
    messageEl.textContent=message
    //console.log(message)    
}
function newCard(){

    if(isAlive==true && !hasBlackJack){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
        renderGame()
    }

}
function reset(){
    if(isAlive==false){
    cardEl.textContent="Cards:"
    sumEl.textContent="Sum:"
    }


}