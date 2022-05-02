# spotify-nowplaying
a spotify now playing html5 canvas widget

Over a Socket.io connection emit the Spotify now Playing data packet in channel 'songinfo'.

##example call in node.js socket.io server using spotify api
```
function getSpotifyNowPlaying() {
      spotifyApi.getMyCurrentPlayingTrack()
        .then(function(data) {
          io.emit("songinfo", {song: data.body.item.name, artist: data.body.item.artists[0].name, album: data.body.item.album.name, image: data.body.item.album.images[0].url})
        }
  }
```

##example spotify api response body
```
  {
    "timestamp": 1650506333001,
    "context": {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/1oDbLbJSRUBBOp9SU6NOjI"
      },
      "href": "https://api.spotify.com/v1/artists/1oDbLbJSRUBBOp9SU6NOjI",
      "type": "artist",
      "uri": "spotify:artist:1oDbLbJSRUBBOp9SU6NOjI"
    },
    "progress_ms": 25923,
    "item": {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/50bY8HGxT0SuDgJX3AilTT"
            },
            "href": "https://api.spotify.com/v1/artists/50bY8HGxT0SuDgJX3AilTT",
            "id": "50bY8HGxT0SuDgJX3AilTT",
            "name": "Sesame Street",
            "type": "artist",
            "uri": "spotify:artist:50bY8HGxT0SuDgJX3AilTT"
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4xKLMeMarLeJFNzdtM92km"
        },
        "href": "https://api.spotify.com/v1/albums/4xKLMeMarLeJFNzdtM92km",
        "id": "4xKLMeMarLeJFNzdtM92km",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737aee580f40f159ade4a6434a",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027aee580f40f159ade4a6434a",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517aee580f40f159ade4a6434a",
            "width": 64
          }
        ],
        "name": "Sesame Street: What's the Number?",
        "release_date": "2019-11-01",
        "release_date_precision": "day",
        "total_tracks": 10,
        "type": "album",
        "uri": "spotify:album:4xKLMeMarLeJFNzdtM92km"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1oDbLbJSRUBBOp9SU6NOjI"
          },
          "href": "https://api.spotify.com/v1/artists/1oDbLbJSRUBBOp9SU6NOjI",
          "id": "1oDbLbJSRUBBOp9SU6NOjI",
          "name": "Count Von Count",
          "type": "artist",
          "uri": "spotify:artist:1oDbLbJSRUBBOp9SU6NOjI"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/64TYMfqkpGQsUEuF5xqS2R"
          },
          "href": "https://api.spotify.com/v1/artists/64TYMfqkpGQsUEuF5xqS2R",
          "id": "64TYMfqkpGQsUEuF5xqS2R",
          "name": "Elmo",
          "type": "artist",
          "uri": "spotify:artist:64TYMfqkpGQsUEuF5xqS2R"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6aFmZaY3ydeUcYFXIJqzAT"
          },
          "href": "https://api.spotify.com/v1/artists/6aFmZaY3ydeUcYFXIJqzAT",
          "id": "6aFmZaY3ydeUcYFXIJqzAT",
          "name": "Abby Cadabby",
          "type": "artist",
          "uri": "spotify:artist:6aFmZaY3ydeUcYFXIJqzAT"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0iDC0DDdk9WL7W8OdBSmtE"
          },
          "href": "https://api.spotify.com/v1/artists/0iDC0DDdk9WL7W8OdBSmtE",
          "id": "0iDC0DDdk9WL7W8OdBSmtE",
          "name": "Big Bird",
          "type": "artist",
          "uri": "spotify:artist:0iDC0DDdk9WL7W8OdBSmtE"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2wxve9scaPJQnUUKE3Q4Sf"
          },
          "href": "https://api.spotify.com/v1/artists/2wxve9scaPJQnUUKE3Q4Sf",
          "id": "2wxve9scaPJQnUUKE3Q4Sf",
          "name": "Rosita",
          "type": "artist",
          "uri": "spotify:artist:2wxve9scaPJQnUUKE3Q4Sf"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0BQ8l7C4ooQ9YqqnXsi4Vn"
          },
          "href": "https://api.spotify.com/v1/artists/0BQ8l7C4ooQ9YqqnXsi4Vn",
          "id": "0BQ8l7C4ooQ9YqqnXsi4Vn",
          "name": "Grover",
          "type": "artist",
          "uri": "spotify:artist:0BQ8l7C4ooQ9YqqnXsi4Vn"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1qkEx9YPevCOQhazUZK1bJ"
          },
          "href": "https://api.spotify.com/v1/artists/1qkEx9YPevCOQhazUZK1bJ",
          "id": "1qkEx9YPevCOQhazUZK1bJ",
          "name": "Ernie",
          "type": "artist",
          "uri": "spotify:artist:1qkEx9YPevCOQhazUZK1bJ"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/50bY8HGxT0SuDgJX3AilTT"
          },
          "href": "https://api.spotify.com/v1/artists/50bY8HGxT0SuDgJX3AilTT",
          "id": "50bY8HGxT0SuDgJX3AilTT",
          "name": "Sesame Street",
          "type": "artist",
          "uri": "spotify:artist:50bY8HGxT0SuDgJX3AilTT"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0KUfoAHP20vQHuDhiEAa8r"
          },
          "href": "https://api.spotify.com/v1/artists/0KUfoAHP20vQHuDhiEAa8r",
          "id": "0KUfoAHP20vQHuDhiEAa8r",
          "name": "Cookie Monster",
          "type": "artist",
          "uri": "spotify:artist:0KUfoAHP20vQHuDhiEAa8r"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1T8DNeUI0R8aw3GNwvqeax"
          },
          "href": "https://api.spotify.com/v1/artists/1T8DNeUI0R8aw3GNwvqeax",
          "id": "1T8DNeUI0R8aw3GNwvqeax",
          "name": "Bert",
          "type": "artist",
          "uri": "spotify:artist:1T8DNeUI0R8aw3GNwvqeax"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1YJuin3502CTHtgkn7YrST"
          },
          "href": "https://api.spotify.com/v1/artists/1YJuin3502CTHtgkn7YrST",
          "id": "1YJuin3502CTHtgkn7YrST",
          "name": "Murray",
          "type": "artist",
          "uri": "spotify:artist:1YJuin3502CTHtgkn7YrST"
        }
      ],
      "disc_number": 1,
      "duration_ms": 115497,
      "explicit": false,
      "external_ids": {
        "isrc": "USWB11900567"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/320lUoilIrw5rfN3Pn4MWL"
      },
      "href": "https://api.spotify.com/v1/tracks/320lUoilIrw5rfN3Pn4MWL",
      "id": "320lUoilIrw5rfN3Pn4MWL",
      "is_local": false,
      "is_playable": true,
      "name": "Number of the Day: 10",
      "popularity": 48,
      "preview_url": "https://p.scdn.co/mp3-preview/c2c61345c9047ebbb7dd4610ed4b11f1ab0155aa?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 5,
      "type": "track",
      "uri": "spotify:track:320lUoilIrw5rfN3Pn4MWL"
    },
    "currently_playing_type": "track",
    "actions": {
      "disallows": {
        "resuming": true,
        "skipping_prev": true
      }
    },
    "is_playing": true
  }
```
