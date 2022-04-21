# spotify-nowplaying
a spotify now playing html5 canvas widget

Socket.io Emit the Spotify now Playing data packet.

function getSpotifyNowPlaying() {
...
      spotifyApi.getMyCurrentPlayingTrack()
        .then(function(data) {
          io.emit("songinfo", {song: data.body.item.name, artist: data.body.item.artists[0].name, album: data.body.item.album.name, image: data.body.item.album.images[0].url})
        }
...
  }
