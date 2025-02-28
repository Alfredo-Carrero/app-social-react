import styles from "./CardFriend.module.css";
import { useState, useEffect } from "react";
import { fetchUsers } from "../api/fetch";

export default function CardFriend() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const unfollowHandleClick = () => {
    alert("Este usuario y tú ya no sois amigos");
  };

  useEffect(() => {
    // Fetch usuarios y posts cuando se renderiza el componente
    const loadData = async () => {
      const usersData = await fetchUsers();

      setUsers(usersData);

      // Finaliza la carga
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      {users.map((user) => {
        return (
          <div className="user-card-friend" key={user.id}>
            <div className="user-info">
              <img
                src="/src/img/user.png"
                alt="user-img"
                className="user-img"
              />

              <span className="username">{user.first_name}</span>

              <button
                className="delete-btn"
                data-id={user.id}
                onClick={unfollowHandleClick}
              >
                Unfollow
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
