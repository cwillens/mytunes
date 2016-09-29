// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    //set up a listener for when add or remove is called on this.collection
    //when this happens, run this.render
    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);
  },


  render: function() {
    this.$el.children().detach();
    this.$el.prepend('<h4>Queue</h4>');
    this.collection.forEach(function(model) {
      var entryView = new SongQueueEntryView({model: model});
      this.$el.append(entryView.render());
    }, this);


    return this.$el;
  }

});
