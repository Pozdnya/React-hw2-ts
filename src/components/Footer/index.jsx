import React from 'react'
import style from './style.module.css'
import Button from '../Button/index'

const Footer = ()=>{
	return(
		<>
		<div className={style.footer}>
			<div className={style.left}>
				<Button name='Реклама'/>
				<Button name='Для бизнесо'/>
				<Button name='O Google'/>
			</div>
			<div className={style.right}>
				<Button name='Конфиденциальность'/>
				<Button name='Условия'/>
				<Button name='Настройки'/>
			</div>
		</div>
		</>
	)
}
export default Footer