import React from "react";
import style from "./style.module.css";
import google from "../img/google.svg";
import gMail from "../img/gmail.svg";
import gMaps from "../img/google-maps.svg";
import gPlay from "../img/google-play.svg";
import youtube from "../img/youtube.svg";
import gDrive from "../img/google-drive.svg";
import gTranslate from "../img/google-translate.svg";
import gPhoto from "../img/google-photos.svg";
import gCalendar from "../img/google-calendar.svg";
import gDocs from "../img/google-docs.svg";

// function gArray(...args) {
//   return args;
// }
// gArray();

const e = React.createElement;
// const icons = [
//   google,
//   gMail,
//   gMaps,
//   gCalendar,
//   youtube,
//   gDrive,
//   gTranslate,
//   gPhoto,
//   gPlay,
//   gDocs
// ];
// const gArray = [
//   "Google",
//   "Почта",
//   "Карты",
//   "Календарь",
//   "Youtube",
//   "Диск",
//   "Переводчик",
//   "Фото",
//   "Play",
//   "Документы"
// ];
// const urls = [
//   "https://www.google.com.ua",
//   "https://mail.google.com/mail/",
//   "https://www.google.com.ua/maps/",
//   "https://www.google.com.ua/calendar/",
//   "https://www.youtube.com",
//   "https://drive.google.com/drive",
//   "https://mail.google.com/translate/",
//   "https://mail.google.com/photos/",
//   "https://play.google.com/",
//   "https://mail.google.com/docs/"
// ];

const gArray = [
  { id: 1, icon: google, title: "Google", link: "https://www.google.com.ua" },
  { id: 2, icon: gMail, title: "Почта", link: "https://mail.google.com/mail/" },
  {
    id: 3,
    icon: gMaps,
    title: "Карты",
    link: "https://www.google.com.ua/maps/"
  },
  {
    id: 4,
    icon: gCalendar,
    title: "Календарь",
    link: "https://www.google.com.ua/calendar/"
  },
  { id: 5, icon: youtube, title: "Youtube", link: "https://www.youtube.com" },
  {
    id: 6,
    icon: gDrive,
    title: "Диск",
    link: "https://drive.google.com/drive"
  },
  {
    id: 7,
    icon: gTranslate,
    title: "Переводчик",
    link: "https://mail.google.com/translate/"
  },
  {
    id: 8,
    icon: gPhoto,
    title: "Фото",
    link: "https://mail.google.com/photos/"
  },
  { id: 9, icon: gPlay, title: "Play", link: "https://play.google.com/" },
  {
    id: 10,
    icon: gDocs,
    title: "Документы",
    link: "https://mail.google.com/docs/"
  }
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
          e(
            "a",
            { key: item.id, href: item.link, className: style.a },
            item.title
          ),
          e(
            "img",
            { key: item.id, src: item.icon, className: style.images },
            null
          )
        )
      )
    )
  );
};
export default List;
