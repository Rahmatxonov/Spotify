import React from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";
const PlayBack = ({ accessToken, play, playing, setPlaying }) => {
  return (
    <SpotifyWebPlayer
      className="w-full"
      play={playing}
      token={accessToken}
      uris={play ? [play] : []}
      callback={(e) => {
        if (e.isPlaying) {
          setPlaying(false);
        }
      }}
    />
  );
};

export default PlayBack;
