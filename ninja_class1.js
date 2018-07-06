function Ninja(name, health, speed, strength){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.readSpeed = function(){
        return speed;
    }
    this.readStrength = function(){
        return strength;
    }
}
Ninja.prototype.sayName = function(){
    console.log("My ninja name is " + this.name);
    return this;
}
Ninja.prototype.showStats = function(){
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.readSpeed() + ", Strength: " + this.readStrength());
    return this;
}
Ninja.prototype.drinkSake = function(){
    this.health += 10;
    console.log("drinking sake");
    console.log(this.health);
    return this;
}
Ninja.prototype.punch = function(ninja){
    ninja.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
}
Ninja.prototype.kick = function(ninja){
    lost = this.readStrength() * 15;
    console.log(lost);
    ninja.health -= lost;
    console.log(ninja.health);
    console.log(ninja.name + " was kicked by " + this.name + " and lost " + lost + " Health!")
}
var ninja1 = new Ninja("Hyabusa");
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
ninja1.sayName();
ninja1.showStats();
redNinja.showStats();
blueNinja.showStats();