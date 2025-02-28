// import { useState } from "react";
// import Card from "./Card";
// import Post from "./Post";
// import CardFriend from "./CardFriend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Wall() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/app");
  };

  return (
    <div className="container-wall">
      <header>
        <h1>Social App</h1>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          id="logout-btn"
          onClick={handleClick}
        />
      </header>

      <div className="main-container">
        {/* Sidebar de amigos */}
        <aside className="sidebar">
          <h3>Friends</h3>
          <ul>{/* <CardFriend /> */}</ul>
        </aside>

        {/* Feed de publicaciones */}
        <div className="feed">
          <h3>What’s happening?</h3>
          <div className="post">{/* <Post /> */}</div>
        </div>

        {/* Sección How to follow */}
        <aside>
          <h3>How to follow</h3>
          <div className="all-users">{/* <Card /> */}</div>
        </aside>
      </div>
    </div>
  );
}
