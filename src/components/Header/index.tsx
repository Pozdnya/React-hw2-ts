import React from 'react';
import Button from '../Button/index';
import style from './style.module.css'
import logo from './menu.svg'


const Header:React.FC = () =>{
	const [isShowed, setIsShowed] = React.useState(true)
return(
		<>
		<div className = {style.buttons}>
			<Button name='Почта' href='https://mail.google.com/'/>
			<Button name='Картинки' href='https://www.google.com.ua/imghp?hl=ru&tab=ri&ogbl'/>
			<button className={style.button} onClick={()=>setIsShowed(!isShowed)}>
			<img src={logo} alt=""/>
			</button>
			{!isShowed && (
				<>
				<div className={style.divList}>
					<ul className={style.list}>
						<li>							
							<a href="https://www.google.com.ua/maps/" className = {style.a}>Карты</a>
						</li>
						<li>						
							<a href="https://www.youtube.com" className = {style.a}>Youtube</a>
						</li>
						<li>
							<a href="https://play.google.com/" className = {style.a}>GooglePlay</a>
						</li>
						<li>							
							<a href="https://translate.google.com.ua/" className = {style.a}>Переводчик</a>
						</li>
					</ul>
				</div>
				</>
				)
			}


			<Button name='Вход' href='https://google.com/'/>
		</div>
		</>
	)
}
export default Header