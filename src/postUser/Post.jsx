import { fetchPosts } from "../api/fetch";
import { useState, useEffect } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch con los posts cuando se renderiza el componente
    const loadData = async () => {
      const postsData = await fetchPosts();

      setPosts(postsData);

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
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
