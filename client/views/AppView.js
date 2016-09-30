// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({


  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    // debugger;
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
      this.currentSongHTML();
    }, this);

  },

  currentSongHTML: function() {
    if (!(this.model.get('currentSong').get('title') || this.model.get('currentSong').get('artist'))) {
      $('.currentSongPlaying').text('Currently playing nothing!');
    } else {
      $('.currentSongPlaying').text('Currently playing ' + this.model.get('currentSong').get('artist') + ' : ' + this.model.get('currentSong').get('title'));
    }
  },

  render: function() {
    //debugger;
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
