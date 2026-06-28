import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      navigate("/admin");
    } catch (err) {
      console.error(err);

      setErrorMsg("Invalid email or password.");
    }

    setLoading(false);
  }

  return (
    <div className="admin-page">

      <div className="admin-auth-card glass">

        <h1>Portfolio CMS</h1>

        <p className="admin-subtitle">
          Sign in to manage your client works,
          learning logs and portfolio content.
        </p>

        <form
          className="admin-form"
          onSubmit={handleLogin}
        >

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            className="primary-btn admin-btn"
            disabled={loading}
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </form>

        {errorMsg && (
          <p className="error-text">
            {errorMsg}
          </p>
        )}

        <Link
          to="/"
          className="back-home-link"
        >
          ← Back to Portfolio
        </Link>

      </div>

    </div>
  );
}