import { gallery } from '../../gallery';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <div className="container">
          <div className="home__block">
            <h1 className="title">База отдыха</h1>
            <h1 className="title title--green">CHILL PLACE</h1>
            <p className="text">
              ЖИВОПИСНЫЙ УГОЛОК РЯДОМ С НАБЕРЕЖНЫМИ ЧЕЛНАМИ
            </p>
          </div>
        </div>
      </div>
      <div className="map">
        <div className="container">
          <h1 className="title">Твой отдых находится здесь:</h1>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a5539cd3c81900e633f4cad115ed97ba1c94d2521a782f5ff34cfd695b3a3d4&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      <div className="gallery">
        <div className="container">
          <h1 className="title">Фотографии:</h1>
          <div className="gallery__block">
            {gallery.map((photo) => (
              <img key={photo} src={photo} className="gallery__img" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
