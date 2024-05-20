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
      spotifyApi.setAccessToken(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      setArtistsList([]);
      return;
    }
    setLoading(true);
    spotifyApi.setAccessToken(accessToken);
    spotifyApi
      .searchTracks("Ummon")
      .then((res) => {
        console.log(res);
        setArtistsList(
          res.body.tracks.items.map((item) => ({
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
          }))
        );
      })
      .catch((err) => {
        setArtistsList([]);
        console.error("Error fetching tracks:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [accessToken]);

  return (
    <div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        artistList.map((item) => (
          <div key={item.uri.id} className="artist-item">
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
