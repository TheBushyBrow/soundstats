SC.initialize({
    client_id: 'b301c8470ec1bde5474c91bfda3dc58b',
    redirect_uri: 'http://thebushybrow.github.io/soundstats/callback.html'
});

$(document).ready(function() {
  $('.connect').click(function(e) {
    e.preventDefault();
    SC.connect(function() {
      SC.get('/me', function(me) {
        $('#username').html(me.username);
      });
    });
  });
});