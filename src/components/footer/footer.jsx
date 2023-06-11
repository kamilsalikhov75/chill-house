import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__navigation">
          <Link className="footer__logo-link">
            <img src={logo} className="footer__logo" />
          </Link>
          <Link to="/about" className="footer__link">
            О НАС
          </Link>
          <Link to="/contacts" className="footer__link">
            КОНТАКТЫ
          </Link>
          <Link to="/cottages" className="footer__link">
            КОТТЕДЖИ
          </Link>
          <Link to="/price" className="footer__link">
            ЦЕНЫ
          </Link>
          <Link to="/checkout" className="footer__link">
            ЗАБРОНИРОВАТЬ
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export { Footer };
