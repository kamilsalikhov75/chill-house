import photo1 from "./assets/foto1.jpg";
import photo2 from "./assets/foto2.jpg";
import photo3 from "./assets/foto3.jpg";
import photo4 from "./assets/foto4.jpg";
import photo5 from "./assets/foto5.jpg";
import photo6 from "./assets/foto6.jpg";

import cottage1 from "./assets/cottage1.jpeg";
import cottage2 from "./assets/cottage2.jpeg";
import cottage3 from "./assets/cottage3.jpeg";

import cottage1_1 from "./assets/cottage1/picw1.jpg";
import cottage1_2 from "./assets/cottage1/pic2.jpg";
import cottage1_3 from "./assets/cottage1/pic3.jpg";
import cottage1_4 from "./assets/cottage1/pic4.jpg";
import cottage1_5 from "./assets/cottage1/pic6.jpg";

import cottage2_1 from "./assets/cottage2/picw11.jpg";
import cottage2_2 from "./assets/cottage2/pic22.jpg";
import cottage2_3 from "./assets/cottage2/pic33.jpg";
import cottage2_4 from "./assets/cottage2/pic44.jpg";
import cottage2_5 from "./assets/cottage2/pic55.jpg";
import cottage2_6 from "./assets/cottage2/pic66.jpg";

import cottage3_1 from "./assets/cottage3/villa2-min.jpeg";
import cottage3_2 from "./assets/cottage3/villa4-min.jpeg";
import cottage3_3 from "./assets/cottage3/v3.jpg";
import cottage3_4 from "./assets/cottage3/v4.jpg";
import cottage3_5 from "./assets/cottage3/v6.jpg";
import cottage3_6 from "./assets/cottage3/v7.jpg";

import cottageBack1 from "./assets/cottage-back-1.jpeg";
import cottageBack2 from "./assets/cottage-back-2.jpeg";
import cottageBack3 from "./assets/cottage-back-3.jpeg";

export const gallery = [photo1, photo2, photo3, photo4, photo5, photo6];
export const cottages = [
  {
    id: 1,
    img: cottage1,
    gallery: [cottage1_1, cottage1_2, cottage1_3, cottage1_4, cottage1_5],
    backgroundImage: cottageBack1,
    name: "КОТТЕДЖ НА 4-Х",
    desc: "Уютный коттедж на 4-х человек (2+2) . В домике вы найдете всё необходимое для комфортного отдыха. Отдельная спальня с двуспальной кроватью. Небольшая гостиная. Кухня с обеденным столом. Ванная комната с душевой кабиной. Встроенная сауна.",
    text: "Просторный, светлый и уютный коттедж в скандинавском стиле на 4-х человек (2 основных места +2 дополнительных). Рядом с коттеджем располагается собственная зона для барбекю и парковочное место. Для большой компании есть возможность забронировать обе половинки сдвоенного коттеджа, чтобы вместе провести время и комфортно отдохнуть!",
    weekdayPrice: 9900,
    holidayPrice: 13900,
    info: [
      "Гостиная, совмещенная с кухней",
      "Собственная сауна",
      "Изолированная спальня с двуспальной кроватью",
      "Раскладной двуспальный диван в гостиной",
      "Обеденная группа",
      "Телевизор, интернет",
      "Совмещенный санузел с душем",
      "Крытая терраса с отдельным выходом",
    ],
  },
  {
    id: 2,
    img: cottage2,
    gallery: [
      cottage2_1,
      cottage2_2,
      cottage2_3,
      cottage2_4,
      cottage2_5,
      cottage2_6,
    ],
    backgroundImage: cottageBack2,
    name: "КОТТЕДЖ НА 6-Х",
    desc: "Большой коттедж на 6 человек. 2 отдельные спальни с двуспальными кроватями. Просторная гостиная. Кухня с обеденным столом. Ванная комната с душевой кабиной. Встроенная сауна. В домике вы найдете всё необходимое для комфортного отдыха вдали от города.",
    text: "Просторный, светлый и уютный коттедж в скандинавском стиле до 6-ти гостей (4 основных места + 2 дополнительных). Рядом с коттеджем располагается собственная зона для барбекю и парковочное место. Для большой компании есть возможность забронировать обе половинки сдвоенного коттеджа, чтобы вместе провести время и комфортно отдохнуть!",
    weekdayPrice: 12900,
    holidayPrice: 15900,
    info: [
      "Большая гостиная, совмещенная с кухней, барная стойка",
      "Собственная сауна",
      "Изолированная спальня с двуспальной кроватью",
      "Изолированная спальня с двумя односпальными кроватями",
      "Раскладной двуспальный диван в гостиной",
      "Обеденная группа",
      "Телевизор, интернет",
      "Совмещенный санузел с душем",
      "Крытая терраса с отдельным выходом или балконом",
    ],
  },
  {
    id: 3,
    img: cottage3,
    gallery: [
      cottage3_1,
      cottage3_2,
      cottage3_3,
      cottage3_4,
      cottage3_5,
      cottage3_6,
    ],
    backgroundImage: cottageBack3,
    name: "ВИЛЛА на 8-Х",
    desc: "Вилла повышенной комфортности расположена в березовом парке. Жилая площадь составляет более 100 м2. Вилла располагает придомовой террасой, беседкой и территорией около дома. Панорамное остекление и вид на озеро подарят Вам ощущение единства и слияния с природой.",
    text: "Вилла – это уединение, личное пространство, продуманные до мелочей детали в сочетании с максимальным комфортом! Eco Villa повышенной комфортности, расположена в березовом парке нашего комплекса, на первой береговой линии. Жилая площадь составляет более 100 м2. Вилла располагает придомовой террасой, беседкой и свободной территорией около дома. Панорамное остекление и вид на озеро подарят Вам ощущение единства и слияния с природой.",
    weekdayPrice: 24000,
    holidayPrice: 29000,
    info: [
      "Просторную гостиную с камином",
      "Кухню со всей необходимой техникой и комплектацией",
      "Обеденную группу",
      "2 санузла с ванными комнатами",
      "2 спальни с двуспальными кроватями",
      "2 комнаты с односпальными кроватями",
      "Террасу площадью 40 м2",
      "Беседку около виллы, оборудованную газовым грилем и мангалом",
      "Зону отдыха с гамаком",
      "Придомовую территорию для личного пользования",
    ],
  },
];
export const inventories = [
  {
    name: "Велосипед",
    price: "400р / час - 1800р / сутки",
  },
  {
    name: "Настольный теннис",
    price: "150р / час",
  },
  {
    name: "Прокат зимней ватрушки",
    price: "200 руб / 1 час",
  },
  {
    name: "Прокат санок/ледянок",
    price: "200 руб / 1 час",
  },
  {
    name: "Прокат беговых лыж",
    price: "400 руб / 1 час",
  },
  {
    name: "Прокат коньков",
    price: "400 руб / 1 час",
  },
  {
    name: "Прокат снегоката",
    price: "200 руб / 1 час",
  },
];
