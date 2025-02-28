import styles from "./App.module.css";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./login/Login";
import Sign from "./sign/Sign";
import Wall from "./wall/Wall";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles["main-content"]}>
            <div className={styles["logo-container"]}>
              <img
                src="/src/img/logo-world.gif"
                alt="logo-app-social"
                className={styles["logo"]}
              />
            </div>

            <div className={styles["content-right"]}>
              <h1 className={styles["header-title"]}>
                No te pierdas lo que está pasando alrededor del mundo
              </h1>

              <Link to="/login" className={styles["links"]}>
                <button className={styles["buttons"]}>Login</button>
              </Link>

              <Link to="/sign" className={styles["links"]}>
                <button className={styles["buttons"]}>Sign in</button>
              </Link>
            </div>
          </div>
        }
      />
      <Route
        path="/app/*"
        element={
          <div className={styles["centered-content"]}>
            <App />
          </div>
        }
      />
      <Route
        path="/login/*"
        element={
          <div className={styles["centered-content"]}>
            <Login />
          </div>
        }
      />

      <Route
        path="/sign/*"
        element={
          <div className={styles["centered-content"]}>
            <Sign />
          </div>
        }
      />
      <Route path="/wall" element={<Wall />} />
    </Routes>
  );
}
