document.getElementById('a1DiceButton').addEventListener('click',()=>{
    const dice1 = Math.floor(Math.random()*6 +1)
    const dice2 = Math.floor(Math.random()*6 +1)
    document.getElementById('a1DiceOne').src = `images/dice${dice1}.png`
    document.getElementById('a1DiceTwo').src = `images/dice${dice2}.png`
    dice1>dice2?document.getElementById('a1Score').innerHTML = 'Player 1 Wins':document.getElementById('a1Score').innerHTML = 'Player 2 Wins'
    if(dice1==dice2){
        document.getElementById('a1Score').innerHTML = 'DRAW'
    }  
})