import React, { useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import ArtistList from "../components/ArtistList";
import PlayBack from "../components/PlayBack";
import AlbumList from "../components/AlbumList";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ code }) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: "3a8b66c95fbd4c63ba1ab75ee1c2562f",
  });

  const accessToken = useAuth(code);
  const [title, setTitle] = useState("");
  const [artists, setArtists] = useState([]);
  const [play, setPlay] = useState("");
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState("");
  const [albumList, setAlbumList] = useState([]);
  const [albumTrack, setAlbumTrack] = useState("");
  const navigate = useNavigate();
  const choosePlay = (item) => {
    setPlay(item.uri.uri);
    setPlaying(true);
  };

  useEffect(() => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
      console.log("Spotify API Access Token Set:", accessToken);
    }
  }, [accessToken, title, albums]);

  useEffect(() => {
    if (!title || !accessToken) {
      setArtists([]);
      return;
    }
    setLoading(true);
    spotifyApi
      .searchTracks(title)
      .then((res) => {
        setArtists(
          res.body.tracks.items.map((item) => ({
            img: item.album.images[0]?.url || "",
            name: item.name,
            uri: {
              id: item.id,
              name: item.artists[0].name,
              uri: item.uri,
            },
          }))
        );
      })
      .catch((err) => {
        setArtists([]);
        console.error("Error fetching tracks:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [title, accessToken]);

  useEffect(() => {
    if (!albums || !accessToken) {
      setAlbumList([]);
      return;
    }
    spotifyApi.searchAlbums(albums).then((res) => {
      setAlbumList(
        res.body.albums.items.map((item) => ({
          img: item.images[0]?.url || "",
          name: item.name,
          uri: {
            id: item.id,
            name: item.artists[0].name,
            uri: item.uri,
          },
        }))
      );
    });
  }, [albums, accessToken]);

  const clickedAlbum = (item) => {
    setAlbumTrack(item.id);
  };

  useEffect(() => {
    if (albumTrack && accessToken) {
      spotifyApi.getAlbumTracks(albumTrack).then((res) => {
        setAlbumTrack(res.body);
      });
    }
  }, [albumTrack, accessToken]);

  return (
    <>
      <div className="h-[60vh] hero">
        <div className="flex items-center space-x-[22px] p-5">
          <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-blue-950 ">
            <MdKeyboardArrowLeft
              onClick={() => navigate - 1}
              className="text-white text-[38px]"
            />
          </span>
          <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-blue-950 ">
            <MdKeyboardArrowRight
              onClick={() => navigate + 1}
              className="text-white text-[38px]"
            />
          </span>
        </div>
        <h2 className="p-5 font-bold text-[39px] leading-[50px] text-white">
          Good afternoon
        </h2>
      </div>
      <div className="m-5">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search music..."
          className="w-full p-3 border-slate-400 border-[2px] rounded-md outline-none"
        />
        <input
          type="text"
          value={albums}
          onChange={(e) => setAlbums(e.target.value)}
          placeholder="Search albums..."
          className="w-full p-3 border-slate-400 border-[2px] rounded-md outline-none mt-2"
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex flex-wrap gap-5 justify-center">
            {artists.map((item) => (
              <ArtistList
                choosePlay={() => choosePlay(item)}
                key={item.uri.id}
                item={item}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            {albumList.map((item) => (
              <AlbumList
                choosePlay={() => clickedAlbum(item)}
                key={item.uri.id}
                item={item}
              />
            ))}
          </div>
          <PlayBack
            playing={playing}
            setPlaying={setPlaying}
            play={play}
            accessToken={accessToken}
          />
        </>
      )}
    </>
  );
};

export default Dashboard;
