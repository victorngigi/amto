import { Link } from "react-router-dom";
import {
  Home,
  Calendar,
  User,
  BadgeCheck,
  Bus,
  FileText,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <nav className="p-6 space-y-4">
        <SidebarLink to="/dashboard" icon={<Home size={18} />} label="Home" />
        <SidebarLink to="/events" icon={<Calendar size={18} />} label="Events" />
        <SidebarLink to="/profile" icon={<User size={18} />} label="Profile" />
        <SidebarLink
          to="/membership"
          icon={<BadgeCheck size={18} />}
          label="Membership"
        />
        <SidebarLink
          to="/operations"
          icon={<Bus size={18} />}
          label="Routes & Operations"
        />
        <SidebarLink
          to="/resources"
          icon={<FileText size={18} />}
          label="Resources"
        />
        <SidebarLink
          to="/support"
          icon={<HelpCircle size={18} />}
          label="Support"
        />
      </nav>
    </aside>
  );
}

function SidebarLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
