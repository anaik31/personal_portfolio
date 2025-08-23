import { Link } from "react-router-dom";
import "../styles.css"

function Header() {
  return (
    <header className = "header">
      <h1>Arpeet Naik Portfolio</h1>
      <nav style={{ marginTop: "10px" }}>
        <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/projects" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Projects</Link>
        <Link to="/about" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;