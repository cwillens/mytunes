// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  },


  render: function() {
    this.collection.forEach(function(model) {
      var entryView = new SongQueueEntryView({model: model});
      this.$el.append(entryView.render());
    }, this);


    return this.$el;
  }

});
