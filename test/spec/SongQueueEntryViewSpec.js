describe('SongQueueEntryView', function() {
  var view, fakeSongs, entryView;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title: 'test song 2'
      }
    ]);
  });

  it('renders html correctly', function() {
    view = new SongQueueEntryView({model: new SongModel({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title: 'test song 3'})
    });
    debugger;
    var renderResult = $('<div><div> data : test song 3 </div></div>');
    expect(view.render().text()).to.eql(renderResult.text());
  });

  it('calls dequeue when element is clicked on in DOM', function() {
    sinon.spy(SongModel.prototype, 'dequeue');
    entryView = new SongQueueEntryView({model: fakeSongs.at(0)});
    $(entryView.el).trigger('click');
    expect(SongModel.prototype.dequeue).to.have.been.called;
  });

});
