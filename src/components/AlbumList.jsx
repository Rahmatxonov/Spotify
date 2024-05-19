import React from "react";
import "./AlbumList.css";
const AlbumList = ({ item }) => {
  return (
    <div className="book mt-[50px]">
      <span>
        <p>{item.name}</p>
        <p>{item.uri.name}</p>
      </span>
      <div className="cover">
        <img src={item.img} alt="image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AlbumList;
