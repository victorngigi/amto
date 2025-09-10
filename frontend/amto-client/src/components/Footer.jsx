export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex justify-between items-center px-6">
        <p>&copy; {new Date().getFullYear()} AMTO. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
