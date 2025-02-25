import { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    user: "",
    password: "",
  });

  // Forms function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "El nombre es obligatorio";
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
    } else {
      alert("Usuario y/o contraseña incorrectos");
    }
  };

  return (
    <>
      <h1>Social App Login</h1>

      <div className="container-login">
        <form onSubmit={handleSubmit} id="login-form">
          <input
            type="text"
            className="user"
            id="user"
            name="user"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
          />

          {/* {errors.user && <p>{errors.user}</p>} */}

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

          {/* {errors.password && <p>{errors.password}</p>} */}

          <br />
          <br />

          <p>
            If you don´t have account, please click{" "}
            <span>
              <a href="/">here</a>
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
