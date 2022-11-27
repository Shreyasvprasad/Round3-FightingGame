
class Sprite{
	constructor({position, imageSrc,scale = 1,framesMax=1,framesHold =11,offset = {x:0,y:0}})
	{
	   this.position = position
	   this.height = 150
	   this.width = 50
	   this.img = new Image()
	   this.img.src = imageSrc
	   this.scale = scale
	   this.framesElapsed=0
	   this.framesHold=framesHold
	   this.framesMax=framesMax
	   this.framesCurr=0
	   this.offset=offset
	}
	draw(){
		c.drawImage(
		this.img, 
		this.framesCurr * (this.img.width / this.framesMax),
	    0,
		this.img.width / this.framesMax,
		this.img.height,
		this.position.x - this.offset.x ,
		this.position.y - this.offset.y ,
		(this.img.width / this.framesMax) * this.scale ,
		this.img.height * this.scale
		)
	}
	animateFrames() {
	this.framesElapsed++
	  if(this.framesElapsed % this.framesHold == 0){
		  if (this.framesCurr < this.framesMax-1){
		     this.framesCurr++
		  }else{
			  this.framesCurr = 0
	  }}
	}
	update() {
	  this.draw()
	  this.animateFrames()
	}
	
	
	}
class Fighter extends Sprite {
	constructor({position,
	velocity,
	color='red',
	imageSrc,
	scale = 1,
	framesMax=1,
	framesHold =11,
	offset = {x:0,y:0},
	sprites,
	attackBox={offset:{},width:undefined,height: undefined}},
	health=100)
	{
		super({
			scale,
			framesMax,
			framesHold,
			imageSrc,
			position,
			offset
		})
		
	   this.framesElapsed=0
	   this.framesCurr=0
	   this.velocity = velocity
	   this.height = 150
	   this.width = 50
	   this.attackBox = {
		   position: {
			   x: this.position.x ,
			   y: this.position.y
		   },
		   offset: attackBox.offset,
		   width: attackBox.width,
		   height: attackBox.height
	   }
	   this.scale = scale
	   this.color= color
	   this.isAttacking
	   this.health=health
	   this.sprites = sprites
	   this.dead = false
	   for ( const sprite in sprites) {
         sprites[sprite].img = new Image()
		 sprites[sprite].img.src = sprites[sprite].imageSrc
	   }
	}
	update() {
		
	  this.draw()
	  if (!this.dead){
	  this.animateFrames()}
	  this.attackBox.position.x = this.position.x + this.attackBox.offset.x
	  this.attackBox.position.y = this.position.y + this.attackBox.offset.y
	  //c.fillRect(this.attackBox.position.x,this.attackBox.position.y,this.attackBox.width,this.attackBox.height)
	  this.position.x += this.velocity.x
	  this.position.y += this.velocity.y
	  
	   if ( this.position.y + this.height + this.velocity.y >= canvas.height-96){
	       this.velocity.y = 0
		   this.position.y =330
		   }else
		{
			this.velocity.y+= gravity
		}
	}
	
	attack() {
		this.switchsprite('attack1')
		this.isAttacking = true
	}
	
	takeHit()
	{
		if (this.health <=0){
			this.switchsprite('death')
		}else this.switchsprite('takeHit')
			
	}
switchsprite(sprite) {
	if ( this.img === this.sprites.death.img)
	{ if ( this.framesCurr === this.sprites.death.framesMax-1)
		this.dead = true
	return}
	if ( this.img === this.sprites.attack1.img && this.framesCurr <this.sprites.attack1.framesMax-1)
		return
	if ( this.img === this.sprites.takeHit.img && this.framesCurr <this.sprites.takeHit.framesMax-1)
		return
switch (sprite){
	case 'idle':
	if (this.img != this.sprites.idle.img){
	    this.img= this.sprites.idle.img
	this.framesHold = this.sprites.idle.framesHold
	this.framesMax = this.sprites.idle.framesMax
	this.framesCurr = 0}
	   break
	case 'Run':
	    if (this.img != this.sprites.run.img){
	    this.img= this.sprites.run.img
	this.framesHold = this.sprites.run.framesHold
	this.framesMax = this.sprites.run.framesMax
	this.framesCurr = 0}
		break
	case 'Jump':
	    if (this.img != this.sprites.jump.img){
	    this.img= this.sprites.jump.img
	this.framesHold = this.sprites.jump.framesHold
	this.framesMax = this.sprites.jump.framesMax
	this.framesCurr = 0}
		break
		case 'fall':
	    if (this.img != this.sprites.fall.img){
	    this.img= this.sprites.fall.img
	this.framesHold = this.sprites.fall.framesHold
	this.framesMax = this.sprites.fall.framesMax
	this.framesCurr = 0}
		break
		case 'attack1':
	    if (this.img != this.sprites.attack1.img){
	    this.img= this.sprites.attack1.img
	this.framesHold = this.sprites.attack1.framesHold
	this.framesMax = this.sprites.attack1.framesMax
	this.framesCurr = 0}
		break
		case 'takeHit':
	    if (this.img != this.sprites.takeHit.img){
	    this.img= this.sprites.takeHit.img
	this.framesHold = this.sprites.takeHit.framesHold
	this.framesMax = this.sprites.takeHit.framesMax
	this.framesCurr = 0}
		break
		case 'death':
	    if (this.img != this.sprites.death.img){
	    this.img= this.sprites.death.img
	this.framesHold = this.sprites.death.framesHold
	this.framesMax = this.sprites.death.framesMax
	this.framesCurr = 0}
		break
}
}
}