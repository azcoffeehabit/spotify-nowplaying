
class Movable{
  constructor(x, y){
    //this.x = Math.random() * canvas.width;
    //this.y = Math.random() * canvas.height;
    this.x = x;
    this.y = y;
    this.destX = x;
    this.destY = y;
    this.angle = 0;
    this.range = 200;
    this.speed = 0.1;
    this.maxSpeed= 1.0;
    this.anglespeed = Math.PI/100;
    this.direction = 1;
    this.rotation = 0;
  }
  lookAt(lookX, lookY){
    this.rotation = Math.atan2(lookY - this.y, lookX - this.x);
  }

  travelAlong() {
    this.destX = this.x + 1000.0 * Math.cos(this.rotation);
    this.destY = this.y + 1000.0 * Math.sin(this.rotation);
    this.moveTo(this.destX, this.destY);
  }

  moveTo(x, y){
    this.lookAt(x, y);

    this.destX = x;
    this.destY = y;
    this.x += (this.destX - this.x) * this.speed;
    this.y += (this.destY - this.y) * this.speed;
  }

  rotateAround(rad, scale){
    this.angle -= this.anglespeed;

    if(this.angle <= 0){
			this.angle = 360;
		}

		if(this.direction) {
			this.x = this.x + Math.cos(this.angle) * (rad * scale);
			this.y = this.y + Math.sin(this.angle) * (rad * scale);
		} else {
			this.x = this.x - Math.sin(this.angle) * (rad * scale);
			this.y = this.y - Math.cos(this.angle) * (rad * scale);
		}

		if (this.x >= (canvas.width - (30 * scale))){
			this.x = canvas.width - (30 * scale);
		}
		else if (this.x <= (0 + (30 * scale))){
			this.x = 0 + (30 * scale);
		}

		if (this.y >= (canvas.height - (30 * scale))){
			this.y = canvas.height - (30 * scale);
		}
		else if (this.y <= (30 + (30 * scale))){
			this.y = 30 + (30 * scale);
		}
  }
  moveCosX() {
    this.angle += this.anglespeed;
    //this.x += this.speed;
    this.x += this.speed;
    this.y = Math.cos(this.angle) * this.range;
    if (this.x > (canvas.width + (30 * scale))){
			this.x = 0 - (30 * scale);
		}
		else if (this.x < (0 - (30 * scale))){
			this.x = canvas.width + (30 * scale);
		}
    if (this.y > (canvas.height + (30 * scale))){
			this.y = canvas.height - (30 * scale);
		}
		else if (this.y < (0 - (30 * scale))){
			this.y = canvas.height + (30 * scale);
		}
    if(this.angle >= 360){
      this.angle = 0;
    }
  }
  moveSineX() {
    this.angle += this.anglespeed;
    //this.x += this.speed;
    this.x -= this.speed;
    this.y = Math.sin(this.angle) * this.range;
    if (this.x > (canvas.width + (30 * scale))){
			this.x = 0 - (30 * scale);
		}
		else if (this.x < (0 - (30 * scale))){
			this.x = canvas.width + (30 * scale);
		}
    if (this.y > (canvas.height + (30 * scale))){
			this.y = canvas.height - (30 * scale);
		}
		else if (this.y < (0 - (30 * scale))){
			this.y = canvas.height + (30 * scale);
		}
    if(this.angle >= 360){
      this.angle = 0;
    }
  }
}
