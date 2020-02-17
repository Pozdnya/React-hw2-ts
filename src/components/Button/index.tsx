import React from 'react';
import style from './style.module.css';

interface OwnProps {
	href:string,
	name:string
}

let Button:React.FC<OwnProps> = (props) =>{
	return(
		<>
		 <a className={style.a} href={props.href}>{props.name}</a> 
		</>
	)
}
export default Button

//  href={props.href}