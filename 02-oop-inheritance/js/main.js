function extend(childObject, parentObject) {
  // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject​
  // So the copyOfParent object now has everything the parentObject has
  var copyOfParent = Object.create(parentObject.prototype);
  //Then we set the constructor of this new object to point to the childObject.​
  // Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.
  copyOfParent.constructor = childObject;

  // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)​
  childObject.prototype = copyOfParent;
}

//======Observable
var Observable = function(){
  this.observers = [];
}

Observable.prototype.addObserver = function(obj) {
  return this.observers.push( obj );
};

Observable.prototype.notify = function(action) {
  var observerCount = this.observers.length;
  for(var i=0; i < observerCount; i++){
    for (var e=0; e < this.observers[i].events.length; e++) {
      if(this.observers[i].events[e].event === action)
      {
        this.observers[i].events[e].callback(this);
      }
    }
  }
};


var trackModule = (function(){
  
  var Track = function(title, artist, duration){
    Observable.call(this);
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  extend(Track, Observable);

  Track.prototype.play = function() {
    //console.log("You are listen, " + this.title);
    this.notify("play");
  };

  Track.prototype.stop = function() {
    this.notify("stop");
  };

  // set value of attr in Track
  Track.prototype.set = function(attr, value) {
    this[attr] = value;
  };

  // return value of attr in Track
  Track.prototype.get = function(attr) {
    return this[attr];
  };

  return Track;

}());


/*
var Track = function(title, artist, duration){
  Observable.call(this);
  this.title = title;
  this.artist = artist;
  this.duration = duration;
}

extend(Track, Observable);

Track.prototype.play = function() {
  //console.log("You are listen, " + this.title);
  this.notify("play");
};

Track.prototype.stop = function() {
  this.notify("stop");
};

// set value of attr in Track
Track.prototype.set = function(attr, value) {
  this[attr] = value;
};

// return value of attr in Track
Track.prototype.get = function(attr) {
  return this[attr];
};
*/
//===============TrackObserver
var TrackObserver = function(){
  this.events = 
    [
      {
        event : "play",
        callback : function(track){ 
          console.log("You are playing, " + track.title);
        }
      },
      {
        event : "stop",
        callback : function(track){ 
          console.log("You stopped, " + track.title);
        }
      }

    ]
};

/*==DownloadableTrack======================*/
var DownloadableTrack = function () {
  trackModule.call(this);
};

extend(DownloadableTrack, trackModule);

DownloadableTrack.prototype.download = function () {
  console.log('Downloading...'+this.title);
};

var droid = new trackModule();
var trackObserver = new TrackObserver([]);

droid.set('artist', 'Jordan Suckley');
droid.set('title', 'Droid');
droid.addObserver(trackObserver);

droid.play();