// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //var songData = [];
    var context = this;

    $.ajax({
        // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('received data successfully');
        data.results.forEach(function(song) {
          context.add({url: song.url, title: song.title, artist: song.artist});
        });
        context.loadedData();
      },
      error: function (data) {
        console.error('Failed to get data', data);
      }
    });
  },

  loadedData: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('loadedData', this);
  }

});