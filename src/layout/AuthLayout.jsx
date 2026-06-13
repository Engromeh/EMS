export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout min-h-screen flex items-center justify-center bg-gray-50">
      {children}
    </div>
  );
}
