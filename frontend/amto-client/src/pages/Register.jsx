import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "dummy-token"); // simulate
    navigate("/dashboard");
  };

  return (
      <form
        onSubmit={handleRegister}
        className="flex flex-col justify-center h-full"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="border rounded w-full p-3 mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded w-full p-3 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full p-3 mb-4"
        />
        <button
          type="submit"
          className="bg-green-600 text-white w-full py-3 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
  );
}
