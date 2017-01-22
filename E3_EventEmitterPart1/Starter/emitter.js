function Emitter() {
  this.events = {};
}

// on is use to to notify what happens  when a condition is met.
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  // make sure events has an array else create a new one.
  this.events[type].push(listener);
  // pushes the listener into the property (array) into the object.
};


// Emit use if something happen. Respond
Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
};

module.exports = Emitter;
