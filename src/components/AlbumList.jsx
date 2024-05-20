import React from "react";
import "./AlbumList.css";
const AlbumList = ({ item }) => {
  return (
    <div className="book mt-[50px]">
      <p>Artists: {item.uri.name}</p>
      <p>Song: {item.name}</p>

      <div className="cover">
        <img src={item.img} alt="image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AlbumList;
