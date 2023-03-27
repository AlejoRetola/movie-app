import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="min-w-screen">
      <Header />
      {children}
    </div>
  );
}
