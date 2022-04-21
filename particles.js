function getRandom(max){
  return (Math.random() * max);
}

class Particle{
  constructor (x, y, xSpeed,ySpeed) {
    this.x=x;
    this.y=y;
    this.originX=x;
    this.originY=y;
    this.xSpeed=xSpeed;
    this.ySpeed=ySpeed;
    this.lt=0;
    this.maxCycles = 1;
    this.cycle = 0;
  }
}

class Particles {
  constructor(numParticles, timerMs, mode){
    this.particleArray = [];
    this.timerMs = timerMs;
    for(var i = 0; i < numParticles; i++){
      if(mode = "random"){
        //random particles are distributed throughout the canvas like a starfield
        const newParticle = new Particle(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
        //console.log(JSON.stringify(newParticle));
        this.particleArray.push(newParticle);
      }
      else {
        //these particles have 0 origin
        const newParticle = new Particle(0, 0, 1, 1);
        //console.log(JSON.stringify(newParticle));
        this.particleArray.push(newParticle);
      }
    }
    this.particleInterval = setInterval(function(){this.update}, this.timerMs);
  }
  update(){
      this.particleArray.map(function(particle){particle.lt++;});
  }
  smoke(particle){
    let maxLife=200, sp=1, sz=100 * scale;
    ctx.fillStyle = "rgb(" + 0 + "," + 0 + "," + 0 + "," + 0.03 + ")";
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle="rgba("+(20-(particle.lt*2))+","+(20-(particle.lt*2))+","+(20-(particle.lt*2))+","+(maxLife/particle.lt*0.1)+")";
    ctx.beginPath();
    ctx.arc(this.x + (particle.xSpeed * scale), this.y + (particle.ySpeed * (scale*4) - 100), ((particle.lt)/maxLife*(sz/2)+(sz/2)) * scale, 0, Math.PI*2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    if(particle.lt <= maxLife)
    {
      particle.xSpeed += ((Math.random() * (sp  + 1)) - (sp));
      particle.ySpeed += ((Math.random() * (sp  + 1)) - (sp));
      return true;
    }
    else {
      particle.lt = 0;
      return true;
    }
    return false;
  }
  random(particle) {
    ctx.fillStyle="white";
    ctx.fillRect(particle.x, particle.y, 1, 1);
  }
  explode(particle) {
		let mx=10,sp=2,sz=15 * scale;
		ctx.globalCompositeOperation = "lighter";
		ctx.fillStyle="rgba("+(260-(particle.lt*2))+","+((particle.lt*2)+50)+","+(particle.lt*2)+","+(((mx-particle.lt)/mx)*0.5)+")";
		ctx.beginPath();
		//ctx.arc((((this.x + (20*scale)) + ((Math.random() * 51) - 50) + offsetX) * scale), (((this.y + (20*scale)) + ((Math.random() * 51) - 50) + offsetY) * scale), ((mx-particle.lt)/mx*(sz/2)+(sz/2)) * scale, 0, Math.PI*2);
    ctx.arc(((this.x + (20*scale)) + ((Math.random() * 51) - 50) * scale), ((this.y + (20*scale)) + ((Math.random() * 51) - 50) * scale), ((mx-particle.lt)/mx*(sz/2)+(sz/2)) * scale, 0, Math.PI*2);
		ctx.fill();
    //particle.lt++;
		ctx.globalCompositeOperation = "source-over";
    ctx.closePath();

		if(particle.lt >= mx)
		{
			particle.xSpeed = ((Math.random()*2*sp-sp)/2) * scale;
			particle.ySpeed = (0-Math.random()*2*sp) * scale;
			particle.lt = 0;
      return true;
		}
    return false;
	}
	fire(particle) {
		let mx=80,sp=15,sz=20 * scale;

		let particlex = this.x;
		let particley = this.y;

		ctx.beginPath();
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle="rgba("+(260-(particle.lt*2))+","+((particle.lt*2)+50)+","+(particle.lt*2)+","+(((mx-particle.lt)/mx)*0.1)+")";

    ctx.arc((particlex) + (Math.random() * 51), (particley) - (Math.random() * 53), ((mx-particle.lt)/mx*(sz/2)+(sz/2)) * scale, 0, Math.PI*2);
    //ctx.arc(((this.x + (20*scale)) + ((Math.random() * 51) - 50) * scale), ((this.y - (20*scale)) + ((Math.random() * 51) - 50) * scale), ((mx-particle.lt)/mx*(sz/2)+(sz/2)) * scale, 0, Math.PI*2);
    //ctx.arc(this.x + (particle.xSpeed * scale), this.y - (particle.ySpeed * scale + 100), ((particle.lt)/maxLife*(sz/2)+(sz/2)) * scale, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
		particlex += particle.xSpeed;
		particley += particle.ySpeed;

		ctx.globalCompositeOperation = "source-over";
		if(particle.lt >= mx)
		{
			particle.xSpeed = ((Math.random()*2*sp-sp)/2) * scale;
			particle.ySpeed = (0-Math.random()*2*sp) * scale;
			particle.lt = 0;
			return true;
		}
		return false;
	}
}
