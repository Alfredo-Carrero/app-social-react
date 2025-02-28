import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./login/Login";
import Sign from "./sign/Sign";
import Wall from "./wall/Wall";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-content">
            <div className="logo-container">
              <img
                src="/src/img/logo-world.gif"
                alt="logo-app-social"
                className="logo"
              />
            </div>
            <div className="content-right">
              <h1 className="header-title">
                No te pierdas lo que está pasando alrededor del mundo
              </h1>

              <Link to="/login" className="links">
                <button className="buttons">Login</button>
              </Link>

              <Link to="/sign" className="links">
                <button className="buttons">Sign in</button>
              </Link>
            </div>
          </div>
        }
      />
      <Route path="/app/*" element={<App />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/sign/*" element={<Sign />} />
      <Route path="/wall" element={<Wall />} />
    </Routes>
  );
}

export default App;
