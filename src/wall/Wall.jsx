import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../api/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import cardStyles from "../card/Card.module.css";
import Card from "../card/Card";
import Post from "../postUser/Post";
import styles from "./Wall.module.css";

export default function Wall() {
  // LogOut
  const navigate = useNavigate();

  // Estado para los usuarios a seguir
  const [usersToFollow, setUsersToFollow] = useState([]);

  // Estado para los amigos
  const [friends, setFriends] = useState([]);

  // Estado de carga
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await fetchUsers();

      // Cargar amigos desde localStorage si existen
      const storedFriends = JSON.parse(localStorage.getItem("friends")) || [];
      setFriends(storedFriends);

      // Filtrar los usuarios que ya son amigos
      const filteredUsers = usersData.filter(
        (user) => !storedFriends.some((friend) => friend.id === user.id)
      );

      setUsersToFollow(filteredUsers);

      setLoading(false);
    };

    loadUsers();
  }, []);

  // Función para manejar el seguimiento de un usuario
  const handleFollow = (user) => {
    // Agregar el usuario a la lista de amigos y eliminar de usersToFollow
    setFriends((prevFriends) => {
      const newFriends = [...prevFriends, user];
      localStorage.setItem("friends", JSON.stringify(newFriends));

      // Retorna la nueva lista para actualizar el estado
      return newFriends;
    });

    setUsersToFollow((prevUsersToFollow) =>
      prevUsersToFollow.filter((u) => u.id !== user.id)
    );
  };

  // Función para manejar la eliminación de un usuario
  const handleDelete = (user) => {
    setFriends((prevFriends) => {
      // Filtra el usuario eliminado
      const newFriends = prevFriends.filter((friend) => friend.id !== user.id);

      // Actualizar localStorage
      localStorage.setItem("friends", JSON.stringify(newFriends));

      // Retorna la nueva lista para actualizar el estado
      return newFriends;
    });

    // Agrega el usuario de nuevo a usersToFollow
    setUsersToFollow((prevUsersToFollow) => [...prevUsersToFollow, user]);
  };

  // Función LogOut
  const handleClick = () => {
    navigate("/app");
    localStorage.clear();
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

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
        <aside className={styles["sidebar-left"]}>
          <h3>Friends</h3>
          <div className={styles["all-friends"]}>
            {friends.map((friend) => (
              <div key={friend.id} className={cardStyles["user-card"]}>
                <div className={cardStyles["user-info"]}>
                  <img
                    src={friend.avatar}
                    alt="user-img"
                    className={cardStyles["user-img"]}
                  />
                  <span className={cardStyles["username"]}>
                    {friend.first_name}
                  </span>
                </div>
                <div className={cardStyles["buttons"]}>
                  <button
                    className={cardStyles["delete-btn"]}
                    onClick={() => handleDelete(friend)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className={styles["feed"]}>
          <h3>What’s happening?</h3>
          <div className={styles["all-posts"]}>
            <Post />
          </div>
        </div>

        <aside className={styles["sidebar-right"]}>
          <h3>How to follow</h3>
          <div className={styles["all-users"]}>
            {/* Pasar usersToFollow a Card como props */}
            <Card
              usersToFollow={usersToFollow}
              onFollow={handleFollow}
              onDelete={handleDelete}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
