var Track = function(title, artist, duration){
  this.title = title;
  this.artist = artist;
  this.duration = duration;
}

Track.prototype.play = function() {
  console.log("You are listen, " + this.title);
};

Track.prototype.stop = function() {
  console.log("You are stop, " + this.title);
};

// set value of attr in Track
Track.prototype.set = function(attr, value) {
  this.attr = value;
};

// return value of attr in Track
Track.prototype.get = function(attr) {
  return this.attr;
};

var tema = new Track("R U Mine?", "Artic Monkeys", 2.00);
tema.play();