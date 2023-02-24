import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar=()=>{
    return (
      <nav
        id="navbar"
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      >
        <div className="container-fluid">
          <Link className="testo navbar-brand" href="#">
            GreenHouse
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="testo nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/prenota-incontro" className="testo nav-link">
                  Prenota incontro
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="testo nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Prodotti
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/pannelliF" className="dropdown-item">
                      Pannelli fotovoltaici
                    </Link>
                  </li>
                  <li>
                    <Link to="/ricicloAcqua" className="dropdown-item" href="#">
                      Riciclo acqua
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/riscaldamento"
                      className="dropdown-item"
                      href="#"
                    >
                      Riscaldamento
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;