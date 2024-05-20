import React, { useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import ArtistList from "../components/ArtistList";
import PlayBack from "../components/PlayBack";
import AlbumList from "../components/AlbumList";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swiper from "../components/Swiper";

const Dashboard = ({ code }) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: "3a8b66c95fbd4c63ba1ab75ee1c2562f",
  });

  const accessToken = useAuth(code);
  const [title, setTitle] = useState("");
  const [artists, setArtists] = useState([]);
  const [mixes, setMixes] = useState([]);
  const [made, setMade] = useState([]);
  const [recently, setRecently] = useState([]);
  const [jump, setJump] = useState([]);
  const [uniquely, setUniquely] = useState([]);
  const [play, setPlay] = useState("");
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState("");
  const [albumList, setAlbumList] = useState([]);
  const [albumTrack, setAlbumTrack] = useState("");
  const [showAllMixes, setShowAllMixes] = useState(false);
  const [showAllMade, setShowAllMade] = useState(false);
  const [showAllRecently, setShowAllRecently] = useState(false);
  const [showAllJump, setShowAllJump] = useState(false);
  const [showAllUniquely, setShowAllUniquely] = useState(false);
  const navigate = useNavigate();

  const choosePlay = (item) => {
    setPlay(item.uri.uri);
    setPlaying(true);
  };

  useEffect(() => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
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
    setAlbumTrack(item.uri.id);
  };

  useEffect(() => {
    if (albumTrack && accessToken) {
      spotifyApi.getAlbumTracks(albumTrack).then((res) => {
        setAlbumTrack(res.body);
      });
    }
  }, [albumTrack, accessToken]);

  const toggleShowAll = (section) => {
    switch (section) {
      case "mixes":
        setShowAllMixes(!showAllMixes);
        break;
      case "made":
        setShowAllMade(!showAllMade);
        break;
      case "recently":
        setShowAllRecently(!showAllRecently);
        break;
      case "jump":
        setShowAllJump(!showAllJump);
        break;
      case "uniquely":
        setShowAllUniquely(!showAllUniquely);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!accessToken) {
      setMixes([]);
      return;
    }
    setLoading(true);
    spotifyApi
      .searchTracks("Sherali")
      .then((res) => {
        setMixes(
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
        setMixes([]);
        console.error("Error fetching tracks:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      setMade([]);
      return;
    }
    setLoading(true);
    spotifyApi
      .searchTracks("Shoxrux")
      .then((res) => {
        setMade(
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
        setMade([]);
        console.error("Error fetching tracks:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      setRecently([]);
      return;
    }
    setLoading(true);
    spotifyApi
      .searchTracks("Jaloliddin")
      .then((res) => {
        setRecently(
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
        setRecently([]);
        console.error("Error fetching tracks:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      setJump([]);
      return;
    }
    setLoading(true);
    spotifyApi
      .searchTracks("Hamdam")
      .then((res) => {
        setJump(
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
        setJump([]);
        console.error("Error fetching tracks:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) {
      setUniquely([]);
      return;
    }
    setLoading(true);
    spotifyApi
      .searchTracks("Ummon")
      .then((res) => {
        setUniquely(
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
        setUniquely([]);
        console.error("Error fetching tracks:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [accessToken]);

  return (
    <>
      <div className="h-[400px] hero">
        <div className="flex items-center space-x-[22px] p-5">
          <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-blue-950">
            <MdKeyboardArrowLeft
              onClick={() => navigate(-1)}
              className="text-white text-[38px]"
            />
          </span>
          <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-blue-950">
            <MdKeyboardArrowRight
              onClick={() => navigate(1)}
              className="text-white text-[38px]"
            />
          </span>
        </div>
        <h2 className="p-5 font-bold text-[39px] leading-[50px] text-white">
          Good afternoon
        </h2>
      </div>
      <div className="flex justify-center items-center m-5 space-x-2">
        <input
          type="text"
          value={albums}
          onChange={(e) => setAlbums(e.target.value)}
          placeholder="Search albums..."
          className="w-full p-3 border-slate-400 border-[2px] rounded-md outline-none  opacity-[30%]"
        />

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search music..."
          className="w-full p-3 border-slate-400 border-[2px] rounded-md outline-none opacity-[30%]"
        />
      </div>
      {loading ? (
        <div className="loader"></div>
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

          <div>
            <span className="w-full flex items-center justify-between p-2">
              <p className="text-white">Your top mixes</p>
              <p
                onClick={() => toggleShowAll("mixes")}
                className="text-white cursor-pointer whitespace-nowrap "
              >
                {showAllMixes ? "Hide" : "See ALL"}
              </p>
            </span>
            <div
              className={`flex justify-center w-full mb-10 ${
                showAllMixes ? "flex flex-wrap" : "overflow-x-hidden"
              } space-x-[31px]`}
            >
              {mixes.map((item) => (
                <Swiper
                  choosePlay={() => choosePlay(item)}
                  key={item.uri.id}
                  item={item}
                  code={code}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="w-full flex items-center justify-between p-2">
              <p className="text-white">Your top mixes</p>
              <p
                onClick={() => toggleShowAll("made")}
                className="text-white cursor-pointer whitespace-nowrap "
              >
                {showAllMade ? "Hide" : "See ALL"}
              </p>
            </span>
            <div
              className={`flex w-full justify-center mb-10 ${
                showAllMade ? "flex flex-wrap" : "overflow-x-hidden"
              } space-x-[31px]`}
            >
              {made.map((item) => (
                <Swiper
                  choosePlay={() => choosePlay(item)}
                  key={item.uri.id}
                  item={item}
                  code={code}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="w-full flex items-center justify-between p-2">
              <p className="text-white">Your top mixes</p>
              <p
                onClick={() => toggleShowAll("recently")}
                className="text-white cursor-pointer whitespace-nowrap "
              >
                {showAllRecently ? "Hide" : "See ALL"}
              </p>
            </span>
            <div
              className={`flex justify-center w-full mb-10 ${
                showAllRecently ? "flex flex-wrap" : "overflow-x-hidden"
              } space-x-[31px]`}
            >
              {recently.map((item) => (
                <Swiper
                  choosePlay={() => choosePlay(item)}
                  key={item.uri.id}
                  item={item}
                  code={code}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="w-full flex items-center justify-between p-2">
              <p className="text-white">Your top mixes</p>
              <p
                onClick={() => toggleShowAll("jump")}
                className="text-white cursor-pointer whitespace-nowrap "
              >
                {showAllJump ? "Hide" : "See ALL"}
              </p>
            </span>
            <div
              className={`flex justify-center w-full mb-10 ${
                showAllJump ? "flex flex-wrap" : "overflow-x-hidden"
              } space-x-[31px]`}
            >
              {jump.map((item) => (
                <Swiper
                  choosePlay={() => choosePlay(item)}
                  key={item.uri.id}
                  item={item}
                  code={code}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="w-full flex items-center justify-between p-2">
              <p className="text-white">Your top mixes</p>
              <p
                onClick={() => toggleShowAll("uniquely")}
                className="text-white cursor-pointer whitespace-nowrap "
              >
                {showAllUniquely ? "Hide" : "See ALL"}
              </p>
            </span>
            <div
              className={`flex justify-center w-[970px] overflow-x-hidden mb-10 ${
                showAllUniquely ? "flex flex-wrap" : "overflow-x-hidden"
              } space-x-[31px]`}
            >
              {uniquely.map((item) => (
                <Swiper
                  choosePlay={() => choosePlay(item)}
                  key={item.uri.id}
                  item={item}
                  code={code}
                />
              ))}
            </div>
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
