import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ usersToFollow, onFollow, onDelete }) {
  // Llamar a la función onFollow recibida como prop
  const followHandleClick = (user) => {
    onFollow(user);
  };

  const deleteHandleClick = (user) => {
    onDelete(user);
  };

  return (
    <>
      {usersToFollow.map((user) => {
        return (
          <div className={styles["user-card"]} key={user.id}>
            <div className={styles["user-info"]}>
              <img
                src={user.avatar}
                alt="user-img"
                className={styles["user-img"]}
              />
              <span className="username">{user.first_name}</span>
            </div>

            <div className={styles["buttons"]}>
              <button
                className={styles["follow-btn"]}
                onClick={() => {
                  followHandleClick(user);
                }}
              >
                Follow
              </button>

              <button
                className={styles["delete-btn"]}
                onClick={() => {
                  deleteHandleClick(user);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

// Validación de Props
Card.propTypes = {
  usersToFollow: PropTypes.array.isRequired, // usersToFollow debe ser un array
  onFollow: PropTypes.func.isRequired, // onFollow debe ser una función
  onDelete: PropTypes.func.isRequired, // onDelete debe ser una función
};
