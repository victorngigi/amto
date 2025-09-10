import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold">
          AMTO
        </Link>
        <div className="space-x-4">
          {token ? (
            <>
              <Button variant="secondary">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost">
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="secondary">
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
