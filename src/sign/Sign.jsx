import styles from "./Sign.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sign() {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Sign functions
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user) {
      newErrors.user = "El nombre es obligatorio";
    }

    if (!formData.email) {
      newErrors.email = "El email es obligatorio";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/wall");
    }
  };

  return (
    <>
      <div className={styles["container-sign"]}>
        <Link to="/" className="img-app">
          <img src="../public/img/logo-world.gif" alt="logo-app" />
        </Link>

        <h1>Social App Sign In</h1>

        <form action="main.html" name="sign-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            className={styles["inputs"]}
            placeholder="username"
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <input
            type="email"
            name="email"
            className={styles["inputs"]}
            placeholder="email"
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <input
            type="password"
            name="password"
            className={styles["inputs"]}
            placeholder="password"
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <p className={styles["p-account"]}>
            I have an{" "}
            <span className={styles["span-account"]}>
              <Link to="/login" className="link-home">
                account
              </Link>
            </span>
          </p>

          <input
            type="submit"
            value="Sign in"
            className={styles["sign-btn"]}
            id="sign-btn"
          />
        </form>
      </div>
    </>
  );
}
