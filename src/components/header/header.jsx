import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.svg';
import menuIcon from '../../assets/menu-icon.svg';
import closeIcon from '../../assets/close-icon.svg';
import { useState } from 'react';

function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo-link">
          <img src={logo} className="header__logo" />
        </Link>
        <button
          className="header__button"
          onClick={() => setIsActiveMenu(!isActiveMenu)}
        >
          {isActiveMenu ? (
            <img src={closeIcon} className="header__logo" />
          ) : (
            <img src={menuIcon} className="header__logo" />
          )}
        </button>
        <nav
          className={`header__navigation ${
            isActiveMenu ? 'header__navigation--active' : ''
          }`}
        >
          <Link to="/about" className="header__link">
            О НАС
          </Link>
          <Link to="/contacts" className="header__link">
            КОНТАКТЫ
          </Link>
          <Link to="/cottages" className="header__link">
            КОТТЕДЖИ
          </Link>
          <Link to="/price" className="header__link">
            ЦЕНЫ
          </Link>
          <Link to="/checkout" className="header__link">
            ЗАБРОНИРОВАТЬ
          </Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
