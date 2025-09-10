export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 h-[28rem]">
        {children}
      </div>
    </div>
  );
}
