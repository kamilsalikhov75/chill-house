import { Link } from 'react-router-dom';
import { cottages } from '../../gallery';
import './cottages.css';

function Cottages() {
  return (
    <div className="cottages">
      <div className="cottages__top"></div>
      <div className="cottages__block">
        <div className="container">
          {cottages.map((cottage) => (
            <div key={cottage.name} className="cottage">
              <img src={cottage.img} className="cottage__img" />
              <div className="cottage__block">
                <h3 className="subtitle">{cottage.name}</h3>
                <p className="text">{cottage.desc}</p>
                <Link to={`/cottage/${cottage.id}`} className="cottage__link">
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Cottages };
