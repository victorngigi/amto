import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stronger United: The Voice of Matatu Owners
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Since 2018, AMTO has united matatu owners across all 47 counties of Kenya, 
            championing their interests at county and national level, and standing 
            strong as a member of the Federation of Public Transport Sector (FPTS).
          </p>
          <Link
            to="/register"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Join Today
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            AMTO exists to give matatu owners a united voice. We engage with government, 
            law enforcement, insurers, and the public on issues that uniquely affect 
            our members and the industry. Our mission is to strengthen owners’ 
            position in Kenya’s public transport system and secure fairness, 
            sustainability, and recognition for the sector.
          </p>
          <p className="text-lg text-gray-700">
            Membership spans both individuals and transport companies. Every member 
            must declare their sacco or company, even if it is not affiliated with AMTO. 
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Join AMTO?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Advocacy & Representation</h3>
              <p>We champion members’ issues to county & national governments, 
                 law enforcement, insurers, and the wider public.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Nationwide Network</h3>
              <p>Our reach covers all 47 counties, giving members influence and 
                 solidarity wherever they operate.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Clear Membership Structure</h3>
              <p>Yearly fees: Individuals Ksh 1,000, Saccos/Companies Ksh 5,000. 
                 Fair, simple, and transparent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Membership Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="p-8 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">Individual Members</h3>
              <p>
                Any matatu owner, or person connected to the sector, can join AMTO. 
                Annual fee: <span className="font-semibold">Ksh 1,000</span>.  
                Vehicle ownership is not required, but sacco/company affiliation must be declared.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">Saccos & Companies</h3>
              <p>
                Transport companies and saccos may register as organisational members. 
                Annual fee: <span className="font-semibold">Ksh 5,000</span>.  
                Vehicle count is tracked for records but does not affect the fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of a Stronger Future
          </h2>
          <p className="text-lg mb-6">
            Join AMTO today and unite with thousands of matatu owners and 
            organisations shaping the future of transport in Kenya.
          </p>
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </>
  );
}
