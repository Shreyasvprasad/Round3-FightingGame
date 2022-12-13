const background = new Sprite({
	position: {
	x: 0,
	y: 0
	},
	imageSrc:'background.png',
})
 
const player = new Fighter({
	position:{
 x:50,
 y:0
},
velocity:
{
	x:0,
	y:0
},
offset: {
	x:0,
	y:0
},
imageSrc:'idle.png',
scale:3.2,
framesMax: 10,
framesHold: 7,
offset: {
	x:175,
	y:52
	},
 sprites: {
	idle:{
		imageSrc:'idle.png',
		framesMax: 10	,
		framesHold: 7	   
	},
	run:{
		imageSrc:'Run.png',
		framesMax: 8,
		framesHold: 5	 
 },
 jump:{
		imageSrc:'Going Up.png',
		framesMax: 3,
		framesHold: 2
 },
 fall:{
		imageSrc:'Going Down.png',
		framesMax: 3,
		framesHold: 2
 },
 attack1:{
		imageSrc:'Attack2.png',
		framesMax: 6	,
		framesHold: 4
 },
 takeHit:{
		imageSrc:'Take Hit.png',
		framesMax: 3	,
		framesHold: 8
 },
 death:{
		imageSrc:'Death.png',
		framesMax: 11,
		framesHold: 4
 }
 },
attackBox:{
  offset:{
	  x:30,
	  y:50
  },
  width:200,
  height:50
 },
health: 200	
})

   const enemy = new Fighter({
	   position:{
	x:880,
	y:0
   },
   velocity:
   {
	   x:0,
	   y:0
   },
   color: 'blue',
   offset: {
	   x:-50,
	   y:0
   },
    imageSrc:'Kidle.png',
   scale:3.2,
   framesMax: 11,
   framesHold: 5,
   offset: {
	   x:215,
	   y:57
	   },
	sprites: {
       idle:{
		   imageSrc:'Kidle.png',
           framesMax:11	,
           framesHold: 5	   
	   },
       run:{
		   imageSrc:'KRun.png',
           framesMax: 8,
		   framesHold: 4	 
	},
	jump:{
		   imageSrc:'KJump.png',
           framesMax: 4	,
		   framesHold: 2
	},
	fall:{
		   imageSrc:'KFall.png',
           framesMax: 4	,
		   framesHold: 2
	},
	attack1:{
		   imageSrc:'KAttack.png',
           framesMax: 6	,
		   framesHold: 5
	},
	takeHit:{
		   imageSrc:'KTake hit.png',
           framesMax: 4 	,
		   framesHold:5
	},
	death:{
		   imageSrc:'KDeath.png',
           framesMax: 9	,
		   framesHold: 5
	}
	},
	attackBox:{
	 offset:{
		 x:-180,
		 y:50
	 },
	 width:200,
	 height:50
	},
	health: 250
   })