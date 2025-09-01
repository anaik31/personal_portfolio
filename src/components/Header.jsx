import { Link } from "react-router-dom";
import "../styles.css"

function Header() {
  return (
    <header className="header slideDown delay-1">
  <h1 className="headerTitle slideDown delay-2">Arpeet Naik Portfolio</h1>
  <nav className="slideDown delay-3">
    <Link to="/portfolio/" className="headerLink slideDown delay-4">Home</Link>
    <Link to="portfolio/about" className="headerLink slideDown delay-5">About</Link>
    <Link to="portfolio/projects" className="headerLink slideDown delay-4">Projects</Link>
    <Link to="portfolio/contact" className="headerLink slideDown delay-5">Contact</Link>
  </nav>
</header>

  );
}

export default Header;