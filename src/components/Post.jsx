import "../styles/Post.css";

export default function Post() {
  return (
    <>
      <div className="post-header">
        <h3 className="username">User 1</h3>
        <img src="/src/img/user.png" alt="user-img" className="user-img" />
      </div>
      <div className="post-content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores qui
          repellat tempore, sed odio expedita similique ipsam odit rem!
        </p>
      </div>
    </>
  );
}
