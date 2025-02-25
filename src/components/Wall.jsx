// import { useState } from "react";
import "../styles/Wall.css";
import Card from "./Card";
import Post from "./Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Wall() {
  return (
    <div className="container-wall">
      <header>
        <h1>Social App</h1>
        <FontAwesomeIcon icon={faRightFromBracket} id="logout-btn" />
      </header>

      <div className="main-container">
        {/* Sidebar de amigos */}
        <aside className="sidebar">
          <h3>Friends</h3>
          <ul>
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </aside>

        {/* Feed de publicaciones */}
        <div className="feed">
          <h3>What’s happening?</h3>
          <div className="post">
            <Post />
            <Post />
            <Post />
          </div>
        </div>

        {/* Sección How to follow */}
        <aside className="right-sidebar">
          <h3>How to follow</h3>
          <div className="all-users">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </aside>
      </div>
    </div>
  );
}
