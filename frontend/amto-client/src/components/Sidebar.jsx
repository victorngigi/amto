import { Link } from "react-router-dom";
import {
  Home,
  Calendar,
  User,
  BadgeCheck,
  Bus,
  FileText,
  HelpCircle,
  X,
} from "lucide-react";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r shadow-sm">
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

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={onClose}
          />

          {/* Sidebar panel */}
          <aside className="relative w-64 bg-white border-r shadow-lg flex flex-col z-50">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={onClose}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-6 space-y-4">
              <SidebarLink
                to="/dashboard"
                icon={<Home size={18} />}
                label="Home"
                onClick={onClose}
              />
              <SidebarLink
                to="/events"
                icon={<Calendar size={18} />}
                label="Events"
                onClick={onClose}
              />
              <SidebarLink
                to="/profile"
                icon={<User size={18} />}
                label="Profile"
                onClick={onClose}
              />
              <SidebarLink
                to="/membership"
                icon={<BadgeCheck size={18} />}
                label="Membership"
                onClick={onClose}
              />
              <SidebarLink
                to="/operations"
                icon={<Bus size={18} />}
                label="Routes & Operations"
                onClick={onClose}
              />
              <SidebarLink
                to="/resources"
                icon={<FileText size={18} />}
                label="Resources"
                onClick={onClose}
              />
              <SidebarLink
                to="/support"
                icon={<HelpCircle size={18} />}
                label="Support"
                onClick={onClose}
              />
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

function SidebarLink({ to, icon, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
