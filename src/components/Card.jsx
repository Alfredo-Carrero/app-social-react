import "../styles/Card.css";

export default function Card() {
  return (
    <>
      <div className="user-card">
        <div className="user-info">
          <img src="/src/img/user.png" alt="user-img" className="user-img" />
          <span className="username">Usuario</span>
        </div>

        <div className="buttons">
          <button className="follow-btn" data-id="${userId}">
            Follow
          </button>
          <button className="delete-btn" data-id="${userId}">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
