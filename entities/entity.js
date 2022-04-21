class Entity extends Movable {
  constructor(x, y, timerMs){
    super(x, y);
    this.draw = this.draw.bind(this);
    this.drawHead = this.drawHead.bind(this);
    this.drawBody = this.drawBody.bind(this);
    this.drawCenter = this.drawCenter.bind(this);
    this.explode = this.explode.bind(this);
    this.smoke = this.smoke.bind(this);
    this.scale = 1.0;
    this.size = 20;
    this.starPoints = 3;
    this.starLength = 3;
    this.isRotating = 0;
    this.rotationSpeed = 10;
    this.particleTimer = timerMs;
    this.particles = new Particles(20, this.particleTimer);
    this.target = null;
    this.isDestroyed = false;
  }
  smoke(){
    this.particles.particleArray.forEach(this.particles.smoke, this);
  }
  explode(){
    let resultArray = this.particles.particleArray.map(this.particles.explode, this);
    //our map function allows us to return a new array when complete, which we use to
    // determine if the last element in the array (particle) has reached its max lifetime
    if(resultArray[this.particles.particleArray.length - 1]){
      return true;
    }
    else {
      return false;
    }
  }
  draw(){}
  drawHead(){}
  drawBody(){}
  drawCenter(){}
}
