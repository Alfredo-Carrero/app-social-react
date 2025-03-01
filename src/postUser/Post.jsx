import styles from "./Post.module.css";
import { fetchPosts } from "../api/fetch";
import { useState, useEffect } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch con los posts cuando se renderiza el componente
    const loadData = async () => {
      const postsData = await fetchPosts();
      const limitedPosts = postsData.slice(0,20);

      setPosts(limitedPosts);

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
      {posts.map((post) => {
        return (
          <div className={styles["post"]} key={post.id}>
            <div className={styles["post-header"]}>
              <h3 className={styles["username"]}>User {post.id}</h3>
              <img
                src="/src/img/user.png"
                alt="user-img"
                className={styles["user-img"]}
              />
            </div>
            <div className={styles["post-content"]}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
