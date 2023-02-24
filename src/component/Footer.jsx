import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () =>{
    return (
      <nav id="footer" className="container navbar bg-body-tertiary">
        <div>
          <Link to="/chi-siamo" className="stile navbar-brand mb-5" href="#">
            chi siamo
          </Link>
          <Link to="/news-letter" className="stile navbar-brand mb-5" href="#">
            news letter
          </Link>
        </div>
        <div>
          <h5>Informazioni</h5>
          <h5>Sede</h5>
          <h5>Via Galvani, 21 - 6044 Urbino</h5>
          <h5>Telefono</h5>
          <h5>+39 347 11222777888</h5>
          <h5>E-mail</h5>
          <h5>Informazioni generali: info@greenhouse.com</h5>
        </div>
      </nav>
    );
}
export default Footer;