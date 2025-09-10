import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - remains at the top of the layout */}
      <Navbar />

      {/* Main content area */}
      <div className="flex-1">
        {children}
      </div>

      {/* Footer - remains at the bottom of the layout */}
      <Footer />
    </div>
  );
}
