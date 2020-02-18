import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer'



const Main:React.FC | React.ComponentClass = () =>{
	return(
		<>
			<Header/>
			<Body/>
			<Footer/>
		</>
	)
}
export default Main