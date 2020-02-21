import React from 'react';
import logo from './logo.svg';
import style from './style.module.css'
import keyboard from "./keyboard.svg"
import microphone from './microphone.svg'


interface ownProps {
	inputValue: string
}

class Body extends React.Component<{}, ownProps>{
	
	state = { inputValue: '' };
	render() {
		const reg = "^[A-zА-яЁё ]+$";
		const google = "https://google.com"
		return (
			<>
				<div className={style.input}>
					<div className={style.logo}>
						<a href={google}>
							<img src={logo} alt="" />
						</a>
					</div>
					<div className={style.inputBlock}>
						<div className={style.inputDiv}>
							<input type="text" className={style.input}
								value={this.state.inputValue}
								onChange={(event) => {
									
									if (event.target.value.match(reg)) { this.setState({ inputValue: event.target.value }) }
								}
								} />
							<div className={style.buttonsIcon}>
								<button id='kb' className={style.inputButton}>
									<img src={keyboard} alt="" className={style.img} />
								</button>
								<button id='mph' className={style.inputButton}>
									<img src={microphone} alt="" className={style.img} />
								</button>
							</div>
						</div>
					</div>
					<div className={style.buttons}>
						<button className={style.button}>Посик в Google</button>
						<button className={style.button}>Мне повезет</button>
					</div>
				</div>
			</>)
	}
}

// let Body: React.FC = () => {
// 	const [val, setVal] = React.useState('')
// 	const reg = "^[A-zА-яЁё]+$";
// 	return (
// 		<>
// 			<div className={style.input}>
// 				<div className={style.logo}>
// 					<a href="https://google.com">
// 						<img src={logo} alt="" />
// 					</a>
// 				</div>
// 				<div className={style.inputBlock}>
// 					<div className={style.inputDiv}>
// 						<input type="text" className={style.input}
// 							value={val}
// 							onChange={(event) => {
// 								if (" " + event.target.value.match(reg)) { setVal(event.target.value)} 
// 							}
// 							} />
// 								<div className={style.buttonsIcon}>
// 						<button id='kb' className={style.inputButton}>
// 							<img src={keyboard} alt="" className={style.img} />
// 						</button>
// 						<button id='mph' className={style.inputButton}>
// 							<img src={microphone} alt="" className={style.img} />
// 						</button>
// 					</div>
// 					</div>
// 				</div>
// 				<div className={style.buttons}>
// 					<button className={style.button}>Посик в Google</button>
// 					<button className={style.button}>Мне повезет</button>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

export default Body

