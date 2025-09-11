import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLandingPage = location.pathname === "/";

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Left side: Brand + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle (hidden on landing page) */}
          {token && !isLandingPage && (
            <button
              onClick={onMenuClick}
              className="md:hidden p-1 rounded hover:bg-primary/80 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}

          <Link to="/" className="text-2xl font-bold">
            AMTO
          </Link>
        </div>

        {/* Right side: Auth buttons */}
        <div className="space-x-2">
          {token ? (
            isLandingPage ? (
              <>
                <Button variant="secondary" asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="destructive" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : null
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
