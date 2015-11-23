SC.initialize({
    client_id: 'b301c8470ec1bde5474c91bfda3dc58b',
    redirect_uri: 'http://thebushybrow.github.io/soundstats/callback.html'
});

// update user's profile description
$(document).ready(function() {
  SC.get('/tracks', { genres: 'trap' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});