import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔹 Later: send to backend with fetch()
    localStorage.setItem("token", "dummy-token");
    navigate("/dashboard"); // redirect after login
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md bg-input text-foreground focus:ring-2 focus:ring-primary"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-md bg-input text-foreground focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 shadow"
        >
          Login
        </button>
      </form>

      {/* Switch to register */}
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Don’t have an account?{" "}
        <Link to="/register" className="text-primary hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
