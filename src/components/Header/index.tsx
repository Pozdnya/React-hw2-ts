import React from 'react';
import Button from '../Button/index';
import style from './style.module.css'
import logo from './menu.svg'
import ListFC from '../ListFC/index'


interface State {
	isOpenedPopup: boolean;
}

interface ListRefs {
    id: number;
    ref: React.RefObject<HTMLDivElement>
}

type Lists = {
	id: number,
	icon: string,
	title: string,
	link: string
}[]


// const Header: React.FC = () => {
// 	const [isShowed, setIsShowed] = React.useState(true)
// 	return (
// 		<>
// 			<div className={style.buttons}>
// 				<Button name='Почта' href='https://mail.google.com/' />
// 				<Button name='Картинки' href='https://www.google.com.ua/imghp?hl=ru&tab=ri&ogbl' />
// 				<button className={style.button} onClick={() => setIsShowed(!isShowed)}>
// 					<img src={logo} alt="" />
// 				</button>
// 				{(!isShowed) && <ListFC />}
// 				<Button name='Вход' href='https://google.com/' />
// 			</div>
// 		</>
// 	)
// }



class Header extends React.PureComponent<{}, State>{
	// constructor(props: {}) {
	// 	super(props);
	// 	// this.clickHandler = this.clickHandler.bind(this)
	// }
	state = {
		isOpenedPopup: false,
	  };
	
	  listRefs: ListRefs[] = []
	
	  myRef: React.RefObject<HTMLDivElement> = React.createRef()
	
	  closePopup = (event: any) => {
		  console.log("TCL: Button -> closePopup -> event", event)
		  console.log(this.myRef)
		  if (!(this.myRef.current?.contains(event.target))) {
				this.setState({ isOpenedPopup: false })
		  }
	  };
	
	  componentDidUpdate(prevProps: {}, prevState: State) {
		console.log("addEventListener", prevState);
		if (prevState.isOpenedPopup === this.state.isOpenedPopup) {
		  return;
		}
	
		if (this.state.isOpenedPopup) {
		  document.addEventListener("click", this.closePopup);
		} else {
			console.log("removeEventListener");
		  document.removeEventListener("click", this.closePopup);
		}
	  }
	
	  togglePopup = (event: React.MouseEvent) => {
		this.setState({ isOpenedPopup: !this.state.isOpenedPopup })
	  }
	render(){
		const { isOpenedPopup } = this.state;
		return (
			<>
				<div className={style.buttons}>
					<Button name='Почта' href='https://mail.google.com/' />
					<Button name='Картинки' href='https://www.google.com.ua/imghp?hl=ru&tab=ri&ogbl' />
					<button className={style.button} onClick={this.togglePopup}>
						<img src={logo} alt="" />
					</button>
					{(this.state.isOpenedPopup) && <ListFC />}
					<Button name='Вход' href='https://google.com/' />
				</div>
			</>
		)
	}
}

export default Header