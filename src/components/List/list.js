import React from "react";
import style from "./style.module.css";
import google from "../img/google.svg";
import gMail from "../img/gmail.svg";
import gMaps from "../img/google-maps.svg";
import gPlay from "../img/google-play.svg";
import youtube from "../img/youtube.svg";
import gDrive from "../img/google-drive.svg";
import gTranslate from '../img/google-translate.svg'
import gPhoto from '../img/google-photos.svg'
import gCalendar from '../img/google-calendar.svg'
import gDocs from '../img/google-docs.svg'

// function gArray(...args) {
//   return args;
// }
// gArray();

const e = React.createElement;
const icons = [google, gMail, gMaps, gCalendar, youtube, gDrive, gTranslate, gPhoto, gPlay,gDocs];
const gArray = ["Google", "Почта", "Карты", 'Календарь', "Youtube", "Диск", 'Переводчик', 'Фото', "Play", 'Документы'];
const urls = [
  "https://www.google.com.ua",
  "https://mail.google.com/mail/",
  "https://www.google.com.ua/maps/",
  "https://www.google.com.ua/calendar/",
  "https://www.youtube.com",
  "https://drive.google.com/drive",
  "https://mail.google.com/translate/",
  "https://mail.google.com/photos/",
  "https://play.google.com/",
  "https://mail.google.com/docs/",
];
let List = () => {
  return e(
    React.Fragment,
    null,
    e(
      "div",
      { className: style.divList },
      gArray.map((item, i) =>
        e(
          "div",
          { className: style.imageContainer },
          e("a", { key: i, href: urls[i], className: style.a }, item),
          e("img", { key: i, src: icons[i], className: style.images }, null)
        )
      )
    )
  );
};
export default List;
