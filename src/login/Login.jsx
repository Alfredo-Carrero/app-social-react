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
      alert("Usuario y contraseña correctos");
      navigate("/wall");
    } else {
      alert("Usuario y/o contraseña incorrectos");
    }
  };

  return (
    <>
      <Link to="/" className="img-app">
        <img src="/src/img/logo-world.gif" alt="logo-app" />
      </Link>
      <h1>Social App Login</h1>

      <div className="container-login">
        <form onSubmit={handleSubmit} id="login-form">
          <input
            type="text"
            className="user"
            id="user"
            name="user"
            placeholder="Username"
            value={formData.user}
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="password"
            className="password"
            id="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

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
            className="login"
            id="login-btn"
          />
        </form>
      </div>
    </>
  );
}
