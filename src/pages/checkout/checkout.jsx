import { useState } from "react";
import { useParams } from "react-router-dom";
import { cottages } from "../../gallery";
import "./checkout.css";

function Checkout() {
  const { id } = useParams();
  const [cottage, setCottage] = useState(id ? id : 1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  console.log(date);
  return (
    <div className="checkout">
      <div className="checkout__top"></div>
      <div className="checkout__block">
        <div className="container">
          <h1 className="title">Бронирование</h1>
          <p className="text">
            Оставьте заявку на и с вами свяжется наш менеджер для уточнения
            деталей
          </p>
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe7S2aXcNWS8p82RiSx3fMIV2LpUI2VSYOojMqBieTIdETs4Q/formResponse"
            className="checkout__form"
          >
            <input
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              className="checkout__input"
              placeholder="Имя"
              name="entry.596404826"
            />
            <input
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              className="checkout__input"
              placeholder="Фамилия"
              name="entry.1400969293"
            />
            <input
              onChange={(event) => setPhone(event.target.value)}
              type="text"
              className="checkout__input"
              placeholder="Номер телефона"
              name="entry.782664725"
            />
            <input
              onChange={(event) => setDate(event.target.value)}
              type="date"
              className="checkout__input"
              name="entry.126142573"
            />
            <select
              name="entry.1022407111"
              value={cottage}
              onChange={(event) => setCottage(event.target.value)}
              className="select"
            >
              {cottages.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <p className="text">
              Цена в будний день: {cottages[cottage - 1].weekdayPrice} рублей
            </p>
            <p className="text">
              Цена в выходной день: {cottages[cottage - 1].holidayPrice} рублей
            </p>
            <button
              disabled={
                phone.length !== 11 ||
                firstName.length === 0 ||
                lastName === 0 ||
                date.length === 0
              }
              className="checkout__button"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Checkout };
