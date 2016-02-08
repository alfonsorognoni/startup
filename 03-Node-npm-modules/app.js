(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Track = function(title, artist, duration){
  this.title = title;
  this.artist = artist;
  this.duration = duration;
}

Track.prototype.play = function() {
  console.log("You are listen, " + this.title);
};

Track.prototype.stop = function() {
  console.log("You stopped, " + this.title);
};

// set value of attr in Track
Track.prototype.set = function(attr, value) {
  this[attr] = value;
};

// return value of attr in Track
Track.prototype.get = function(attr) {
  return this[attr];
};

module.exports = Track;
},{}]},{},[1]);
