import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { LoginWrapper } from "./style";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    login(email, password);
  };
  return (
    <LoginWrapper>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label>
          <span>Email: </span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password: </span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        {isPending ? (
          <button className="btn" disabled>
            Loading
          </button>
        ) : (
          <button className="btn">Login</button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
    </LoginWrapper>
  );
}
