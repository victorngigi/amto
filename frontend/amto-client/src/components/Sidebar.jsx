import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  User,
  BadgeCheck,
  Bus,
  FileText,
  HelpCircle,
  X,
  LogOut
} from "lucide-react";

export default function Sidebar({ open, onClose }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col justify-between w-64 bg-white border-r shadow-sm">
        <nav className="p-6 space-y-4">
          <SidebarLink to="/dashboard" icon={<Home size={18} />} label="Home" activePath={currentPath}/>
          <SidebarLink to="/events" icon={<Calendar size={18} />} label="Events" activePath={currentPath}/>
          <SidebarLink to="/profile" icon={<User size={18} />} label="Profile" activePath={currentPath}/>
          <SidebarLink to="/membership" icon={<BadgeCheck size={18} />} label="Membership" activePath={currentPath}/>
          <SidebarLink to="/operations" icon={<Bus size={18} />} label="Routes & Operations" activePath={currentPath}/>
          <SidebarLink to="/resources" icon={<FileText size={18} />} label="Resources" activePath={currentPath}/>
          <SidebarLink to="/support" icon={<HelpCircle size={18} />} label="Support" activePath={currentPath}/>
        </nav>

        <div className="p-6 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors w-full"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={onClose} />

          <aside className="relative w-64 bg-white border-r shadow-lg flex flex-col justify-between z-50">
            <div>
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={onClose}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="p-6 space-y-4">
                <SidebarLink to="/dashboard" icon={<Home size={18} />} label="Home" onClick={onClose} activePath={currentPath}/>
                <SidebarLink to="/events" icon={<Calendar size={18} />} label="Events" onClick={onClose} activePath={currentPath}/>
                <SidebarLink to="/profile" icon={<User size={18} />} label="Profile" onClick={onClose} activePath={currentPath}/>
                <SidebarLink to="/membership" icon={<BadgeCheck size={18} />} label="Membership" onClick={onClose} activePath={currentPath}/>
                <SidebarLink to="/operations" icon={<Bus size={18} />} label="Routes & Operations" onClick={onClose} activePath={currentPath}/>
                <SidebarLink to="/resources" icon={<FileText size={18} />} label="Resources" onClick={onClose} activePath={currentPath}/>
                <SidebarLink to="/support" icon={<HelpCircle size={18} />} label="Support" onClick={onClose} activePath={currentPath}/>
              </nav>
            </div>

            <div className="p-6 border-t">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors w-full"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function SidebarLink({ to, icon, label, onClick, activePath }) {
  const isActive = activePath === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? "bg-primary text-white font-medium"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
