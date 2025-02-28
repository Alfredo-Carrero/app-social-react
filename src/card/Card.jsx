import { useState, useEffect } from "react";
import { fetchUsers } from "../api/fetch";

export default function Card() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const followHandleClick = () => {
    alert("Ahora sigues a este usuario");
  };

  const deleteHandleClick = () => {
    alert("Sugerencia eliminada");
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="user-card">
        {users.map((user) => {
          return (
            <div className="user-card" key={user.id}>
              <div className="user-info">
                <img
                  src="/src/img/user.png"
                  alt="user-img"
                  className="user-img"
                />
                <span className="username">{user.first_name}</span>
              </div>

              <div className="buttons">
                <button
                  className="follow-btn"
                  onClick={() => {
                    followHandleClick(user.id);
                  }}
                >
                  Follow
                </button>

                <button
                  className="delete-btn"
                  onClick={() => {
                    deleteHandleClick(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
