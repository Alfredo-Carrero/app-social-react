import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sign() {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Usuario, email y contraseña correctos");
      navigate("/wall");
    } else {
      alert("Usuario, email y/o contraseña incorrectos");
    }
  };

  return (
    <>
      <Link to="/" className="img-app">
        <img src="/src/img/logo-world.gif" alt="logo-app" />
      </Link>

      <h1>Social App Sign In</h1>

      <div className="container-sign">
        <form action="main.html" name="sign-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            className="user-sign"
            id="user-sign"
            placeholder="username"
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="email"
            name="email"
            className="email-sign"
            id="email-sign"
            placeholder="email"
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="password"
            name="password"
            className="password-sign"
            id="password-sign"
            placeholder="password"
            onChange={handleChange}
          />

          <br />
          <br />

          <p>
            I have an{" "}
            <span>
              <Link to="/login" className="link-home">
                here
              </Link>
            </span>
          </p>

          <input
            type="submit"
            value="Sign in"
            className="sign-btn"
            id="sign-btn"
          />
        </form>
      </div>
    </>
  );
}
