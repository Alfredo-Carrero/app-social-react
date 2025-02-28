import styles from "./Wall.module.css";
// import { useState } from "react";
import Card from "../card/Card";
import Post from "../postUser/Post";
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
    <div className={styles["container-wall"]}>
      <header>
        <h1>Social App</h1>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className={styles["logout-btn"]}
          onClick={handleClick}
        />
      </header>

      <div className={styles["main-container"]}>
        {/* Sidebar de amigos */}
        <aside className={styles["sidebar-left"]}>
          <h3>Friends</h3>
          <div className={styles["all-friends"]}>
            <Card />
          </div>
        </aside>

        {/* Feed de publicaciones */}
        <div className={styles["feed"]}>
          <h3>What’s happening?</h3>
          <div className={styles["all-posts"]}>
            <Post />
          </div>
        </div>

        {/* Sección How to follow */}
        <aside className={styles["sidebar-right"]}>
          <h3>How to follow</h3>
          <div className={styles["all-users"]}>
            <Card />
          </div>
        </aside>
      </div>
    </div>
  );
}
