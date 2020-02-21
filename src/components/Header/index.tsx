import React from 'react';
import Button from '../Button/index';
import style from './style.module.css'
import logo from './menu.svg'
import List from '../List/list.js'



const Header: React.FC = () => {
	const [isShowed, setIsShowed] = React.useState(true)
	return (
		<>
			<div className={style.buttons}>
				<Button name='Почта' href='https://mail.google.com/' />
				<Button name='Картинки' href='https://www.google.com.ua/imghp?hl=ru&tab=ri&ogbl' />
				<button className={style.button} onClick={() => setIsShowed(!isShowed)}>
					<img src={logo} alt="" />
				</button>
				{(!isShowed) && <List />}
				<Button name='Вход' href='https://google.com/' />
			</div>
		</>
	)
}
export default Header