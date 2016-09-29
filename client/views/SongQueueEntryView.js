// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<div> <%- artist %> : <%- title %> </div>'),


  events: {
    'click': 'handleClick'
  },

  handleClick: function() {
    this.model.dequeue();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
