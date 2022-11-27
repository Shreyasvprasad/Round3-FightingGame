function Collision({ rectangle1, rectangle2}){
    return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
   rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && 
   rectangle1.attackBox.height + rectangle1.attackBox.position.y >= rectangle2.position.y &&
   rectangle1.attackBox.position.y <= rectangle2.position.y+rectangle2.height
    )
}
function determineWinner({player,enemy,timerId})
    {   clearTimeout(timerId)
        document.querySelector('#result').style.display= 'flex'
        if (player.health===enemy.health){
   document.querySelector('#result').innerHTML ='Tie'
}
if (player.health>enemy.health){
   document.querySelector('#result').innerHTML ='Player 1 Wins'
   
}
if (player.health<enemy.health){
   document.querySelector('#result').innerHTML ='Player 2 Wins'
}
    }
let timer=30
let timerId
function decreasetimer(){
   if(timer>0) {
       timerId=setTimeout(decreasetimer,1000)
       timer--
       document.querySelector('#timer').innerHTML = timer
}
if(timer===0){
determineWinner({player,enemy,timerId})
}
}

var delayInMilliseconds = 28000;
setTimeout(function() {
    document.querySelector('#result').style.display= 'flex'
	 document.querySelector('#result').innerHTML ='Loading Round 2'
     var delayInMilliseconds1 = 10000;
     setTimeout(function() {
        window.open('https://ornate-moxie-130802.netlify.app/')
     }, delayInMilliseconds1)
  }, delayInMilliseconds)