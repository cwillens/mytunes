// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      //if the added song is the only thing in the queue, run play first
      // debugger;
      if (this.at(1) === undefined) {
        this.playFirst();      
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.at(0)) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

  },

  playFirst: function() {
      // make songQueue.at(0).play
    this.at(0).play();
  }
  //,

  // add: function() {

  // }

});