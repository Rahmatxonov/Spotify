import React from "react";

const Login = () => {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=3a8b66c95fbd4c63ba1ab75ee1c2562f&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played";

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <a
        className="bg-green-400 p-3 rounded-md font-semibold text-white hover:bg-green-500"
        href={AUTH_URL}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default Login;
