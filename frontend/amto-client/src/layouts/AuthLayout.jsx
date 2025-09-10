export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary p-6">
      <div className="w-full max-w-md bg-card text-card-foreground rounded-2xl shadow-lg p-8">
        {children}
      </div>
    </div>
  );
}
