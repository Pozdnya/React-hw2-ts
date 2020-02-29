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

type Arr = {
	id: number;
	icon: string;
	title: string;
	link: string;
}[]



const ListFC:React.FC = () => {
	const gArray:Arr = [
		{
			id: 1,
			icon: google,
			title: "Google",
			link: "https://www.google.com.ua"
		},
		{
			id: 2,
			icon: gMail,
			title: "Почта",
			link: "https://mail.google.com/mail/"
		},
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
		{
			id: 5,
			icon: youtube,
			title: "Youtube",
			link: "https://www.youtube.com"
		},
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
		{
			id: 9,
			icon: gPlay,
			title: "Play",
			link: "https://play.google.com/"
		},
		{
			id: 10,
			icon: gDocs,
			title: "Документы",
			link: "https://mail.google.com/docs/"
		}
	];

	return (
		<div  className={style.divList}>
			{
			gArray.map(item=>(
				<React.Fragment key={item.id}>	
				<div className={style.imageContainer}>{item.title}
					<a href={item.link} className={style.a}>
						<img src={item.icon} alt="" className={style.imgages}/>
					</a>
				</div>
				</React.Fragment>
			))
			}
		</div>
	)

}

export default React.memo(ListFC)