import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="brand" aria-label="Home">◎</Link>
        <Link href="/challenges" className="nav-link">Challenges</Link>
      </div>
    </nav>
  );
}
