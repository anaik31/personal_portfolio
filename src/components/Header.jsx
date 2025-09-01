import { Link } from "react-router-dom";
import "../styles.css"

function Header() {
  return (
    <header className = "header">
      <h1 className = "headerTitle">Arpeet Naik Portfolio</h1>
      <nav style={{ marginTop: "10px" }}>
  <Link to="/portfolio/" className="headerLink">Home</Link>
  <Link to="portfolio/about" className="headerLink">About</Link>
  <Link to="portfolio/projects" className="headerLink">Projects</Link>
  <Link to="portfolio/contact" className="headerLink">Contact</Link>
</nav>

    </header>
  );
}

export default Header;