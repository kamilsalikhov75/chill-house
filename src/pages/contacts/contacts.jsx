import './contacts.css';

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__top"></div>
      <div className="contacts__block">
        <div className="container">
          <h1 className="title">КОНТАКТЫ</h1>
          <p className="text">
            <span>Адрес:</span> 3-я Подгорная улица, 14, муниципальное
            образование Елабуга, Республика Татарстан
          </p>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a5539cd3c81900e633f4cad115ed97ba1c94d2521a782f5ff34cfd695b3a3d4&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
          <p className="text">
            <span>Телефон:</span> 8 (917) 213-12-12
          </p>
          <p className="text">
            <span>Электронная почта:</span> chillplace@mail.ru
          </p>
          <p className="text">
            <span>Группа VK:</span> https://vk.com/
          </p>
        </div>
      </div>
    </div>
  );
}

export { Contacts };
