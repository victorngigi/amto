import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "dummy-token"); // simulate
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-lg rounded-lg p-6 w-80"
      >
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="border rounded w-full p-2 mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded w-full p-2 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full p-2 mb-4"
        />
        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
