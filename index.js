const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 990
canvas.height = 576

c.fillRect(0, 0, canvas.width , canvas.height)

document.querySelector('#result').style.display= 'flex'
document.querySelector('#result').innerHTML ='Start Round 3'
let timer2=2
let timerId2
function decreasetimer2(){
   if(timer2>0) {
       timerId2=setTimeout(decreasetimer2,1000)
       timer2--
       document.querySelector('#timer').innerHTML = timer2
}
if(timer2===0){
	document.querySelector('#result').style.display= 'none'
	document.querySelector('#result').innerHTML =''
}
}
decreasetimer2();

let round = 1
const gravity = 0.8  

 const keys ={
	 a: {
		 pressed: false
	 },
	 d: {
		 pressed: false
	 },
	  w: {
		 pressed : false
	 },
	 ArrowRight: {
		 pressed : false
	 },
	 ArrowLeft: {
		 pressed : false
	 },
	 ArrowUp: {
		 pressed : false
	 }
 }

decreasetimer();

function animate(){
	window.requestAnimationFrame(animate)
	c.fillStyle = 'black'
	c.fillRect(0,0,canvas.width,canvas.height)
    if (round === 1 ){
	background.update()
	player.update()
	enemy.update()
	c.fillStyle = 'rgba(255,255,255,0.08)'
	c.fillRect(0,0,canvas.width,canvas.height)
	enemy.velocity.x=0
	player.velocity.x=0
	
	
	if (!keys.a.pressed && !keys.d.pressed )
		player.switchsprite('idle')
	if (keys.a.pressed ){
	 player.velocity.x=-5
	player.switchsprite('Run')
	}
	if (keys.d.pressed ){
	 player.velocity.x=5
	 player.switchsprite('Run')
	}
	if (player.velocity.y < 0) {
	player.switchsprite('Jump')}
	else if (player.velocity.y > 0) {
		player.switchsprite('fall')
	}
	if (!keys.ArrowLeft.pressed && !keys.ArrowRight.pressed )
		enemy.switchsprite('idle')
	if (keys.ArrowLeft.pressed ){
	 enemy.velocity.x=-5
	 enemy.switchsprite('Run')
	}
	if (keys.ArrowRight.pressed ){
	 enemy.velocity.x=5
	 enemy.switchsprite('Run')
	}
	if (enemy.velocity.y < 0) {
	enemy.switchsprite('Jump')}
	else if (enemy.velocity.y > 0) {
		enemy.switchsprite('fall')
	}
	
	// detect for collision
    if ( 
	Collision({
		rectangle1: player,
		rectangle2: enemy
	}) &&
	player.isAttacking && player.framesCurr === 4
	)
	{
		player.isAttacking=false
		enemy.health -= 10
		enemy.takeHit()
		gsap.to('#enemyHealth',{
			width: enemy.health +'%'})
	}
	// if player misses
	   if (player.isAttacking  && player.framesCurr === 4){
	   player.isAttacking=false}
	
	if ( 
	Collision({
		rectangle1: enemy,
		rectangle2: player
	}) &&
	enemy.isAttacking  && enemy.framesCurr === 2
	)
	{
		enemy.isAttacking=false
		player.health -= 5
		player.takeHit()
		gsap.to('#playerHealth',{
			width: player.health +'%'})
	}
	// if enemy misses
	   if (enemy.isAttacking  && enemy.framesCurr === 2){
	   enemy.isAttacking=false
	   }
	//end game
	if (enemy.health<=0 || player.health<=0)

		determineWinner({player,enemy,timerId})
}
}

animate()

window.addEventListener('keydown',(event) => {
	if(!player.dead){
	switch (event.key) {
	  case 'd':
	     keys.d.pressed=true
		 break
	  case 'a':
	     keys.a.pressed=true
	  break
	  case 'w':
		 if (player.velocity.y>=0){
	     player.velocity.y=-20
		 player.switchsprite('jump')
		 }
	  break
	  case ' ':
	     player.attack()
	  break
}}
	  
	  if(!enemy.dead){
	  switch (event.key) {
	  case 'ArrowRight':
	     keys.ArrowRight.pressed=true
		 break
	  case 'ArrowLeft':
	     keys.ArrowLeft.pressed=true
	  break
	  case 'ArrowUp':
		if (enemy.velocity.y>=0){
	     enemy.velocity.y=-20
		}
	  break
	  case 'Enter':
	     enemy.attack()
	  break
	  console.log(event.key);
	  }}
})

window.addEventListener('keyup',(event) => {
	switch (event.key) {
	  case 'd':
	     keys.d.pressed=false
		 player.switchsprite('idle')
		 break 
	  case 'a':
	     keys.a.pressed=false
		 player.switchsprite('idle')
	  break
		 break
	  case 'ArrowRight':
	     keys.ArrowRight.pressed=false
		 break
	  case 'ArrowLeft':
	     keys.ArrowLeft.pressed=false
	  break
	  case '1':
	    var audio = document.createElement('audio');
var source = document.createElement('source');
var media = document.getElementById('media');
media.appendChild(audio);
audio.appendChild(source);
source.setAttribute('src', 'Abhi Abhi Shek at his best.mp3');
source.setAttribute('type', 'audio/mpeg');
audio.setAttribute('autoplay', 'autoplay');
	  break
	}
	console.log(event)
})


