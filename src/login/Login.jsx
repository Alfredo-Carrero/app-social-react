import styles from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  // Forms function
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

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    }

    setErrors(newErrors);

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
      <div className={styles["container-login"]}>
        <Link to="/" className="img-app">
          <img src="/img/logo-world.gif" alt="logo-app" />
        </Link>

        <h1>Social App Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles["inputs"]}
            name="user"
            placeholder="Username"
            value={formData.user}
            onChange={handleChange}
          />

          {errors.user && (
            <span className={styles["styles-error"]}>{errors.user}</span>
          )}

          <br />
          <br />

          <input
            type="password"
            className={styles["inputs"]}
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className={styles["styles-error"]}>{errors.password}</span>
          )}

          <br />
          <br />

          <p>
            If you don´t have account, please click{" "}
            <span>
              <Link to="/sign" className="link-home">
                here
              </Link>
            </span>
          </p>

          <input
            type="submit"
            value="Log in"
            className={styles["login-btn"]}
            id="login-btn"
          />
        </form>
      </div>
    </>
  );
}
