import { cottages, inventories } from '../../gallery';
import './price.css';

function Price() {
  return (
    <div className="price">
      <div className="price__top"></div>
      <div className="price__block">
        <div className="container">
          <h1 className="title">ЦЕНЫ</h1> 
          <p className="text">Время заезда – 16:00, время выезда – 13:00</p>
          {cottages.map((cottage) => (
            <div key={cottage.name} className="price__item">
              <h3 className="subtitle">{cottage.name}</h3>
              <p className="text">
                В будние дни: {cottage.weekdayPrice} рублей
              </p>
              <p className="text">
                В выходные дни: {cottage.holidayPrice} рублей
              </p>
            </div>
          ))}
          <h3 className="subtitle">Прокат инвентаря</h3>
          {inventories.map((item) => (
            <p key={item.name} className="text">
              <span>{item.name}: </span>
              {item.price}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Price };
