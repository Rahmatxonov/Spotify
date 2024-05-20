import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const List = () => {
  const location = useLocation();
  const { item, code } = location.state || {};
  const accessToken = useAuth(code);
  const [artistList, setArtistsList] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const spotifyApi = new SpotifyWebApi({
    clientId: "3a8b66c95fbd4c63ba1ab75ee1c2562f",
  });

  useEffect(() => {
    if (accessToken) {
      spotifyApi.setArtistsList(accessToken);
    }
  }, [accessToken, title]);

  useEffect(() => {
    if (!title || !accessToken) {
      setArtistsList([]);
      return;
    }
    setLoading(true);
    spotifyApi
      .searchTracks(title)
      .then((res) => {
        const tracks = res.body.tracks.items.map((item) => ({
          img: item.album.images[0]?.url || "",
          name: item.name,
          popularity: item.popularity,
          track_number: item.track_number,
          type: item.type,
          release_date: item.album.release_date,
          uri: {
            id: item.id,
            name: item.artists[0].name,
            uri: item.uri,
          },
        }));
        setArtistsList(tracks);
        console.log("Fetched Tracks:", tracks);
      })
      .catch((err) => {
        setArtistsList([]);
        console.error("Error fetching tracks:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [title, accessToken]);

  return (
    <div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        artistList.map((item) => (
          <div key={item.uri.id} className="artist-item">
            <p className="text-white">Helloooo</p>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.uri.name}</p>
            <p>{item.release_date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
