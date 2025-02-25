import "../styles/Sign.css";

export default function Sign() {
  return (
    <>
      <h1>Social App Sign In</h1>

      <div className="container-sign">
        <form
          action="main.html"
          name="sign-form"
          //   onsubmit="verifySignIn(event)"
        >
          <input
            type="text"
            className="user-sign"
            id="user-sign"
            placeholder="username"
          />

          <br />
          <br />

          <input
            type="email"
            name="email"
            className="email-sign"
            id="email-sign"
            placeholder="email"
          />

          <br />
          <br />

          <input
            type="password"
            className="password-sign"
            id="password-sign"
            placeholder="password"
          />

          <br />
          <br />

          <p>
            I have an{" "}
            <span>
              <a href="login.html">account</a>
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
