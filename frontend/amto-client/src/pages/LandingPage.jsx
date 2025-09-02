import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Matatu Owners Across Kenya 🚐
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Manage your members, vehicles, and yearly contributions all in one platform.
          </p>
          <Link
            to="/register"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why AMTO?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Member Management</h3>
              <p>Track members’ details, status, and yearly contributions.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Vehicle Tracking</h3>
              <p>Manage vehicles, plate numbers, routes, and capacities.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Payment Records</h3>
              <p>Keep clear records of yearly contributions and other payments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to simplify your operations?
          </h2>
          <p className="text-lg mb-6">
            Join AMTO today and take control of your matatu association.
          </p>
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </>
  );
}
