import { Link, useParams } from 'react-router-dom';
import { cottages } from '../../gallery';
import './cottage.css';

function Cottage() {
  const { id } = useParams();
  const cottage = cottages[id - 1];

  return (
    <div className="cottage-page">
      <div className={`cottage-page__top cottage-page__top--${id}`}></div>
      <div className="cottage-page__block">
        <div className="container">
          <h1 className="title">{cottage.name}</h1>
          <p className="text">{cottage.text}</p>
          <p className="text">
            По вопросам бронирования коттеджей на базе отдыха Chill Place вы
            можете обращаться по телефону: 8 (917) 213-12-12.
          </p>
          <Link to={`/checkout/${cottage.id}`} className="cottage-page__link">
            Забронировать это коттедж
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Cottage };
