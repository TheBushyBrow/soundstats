SC.initialize({
    client_id: "b301c8470ec1bde5474c91bfda3dc58b",
    redirect_uri: "http://johnnyedick.com/callback.html",
});

/**
Once that's done you are all set and ready to call the SoundCloud API. 
**/



/**
Call to the SoundCloud API. 
Retrieves list of tracks, and displays a list with links to the tracks showing 'tracktitle' and 'track duration'
**/

  var userId = 39090345; // user_id of Prutsonic

  SC.get("/tracks", {
     user_id: userId,
     limit: 100
 }).then(function (tracks) {
     var tmp = '';

     for (var i = 0; i < tracks.length; i++) {
         tmp = '<a href="' + tracks[i].permalink_url + '">' + tracks[i].title + ' - ' + tracks[i].duration + '</a>';
         $("<li/>").html(tmp).appendTo("#track-list");
     }
 });
 
 
 // initiate auth popup
 SC.connect().then(function() {
   return SC.get('/me');
 }).then(function(me) {
   alert('Hello, ' + me.username);
 });