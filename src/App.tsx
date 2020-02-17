import React from 'react';
import './App.css';
import Main from './components/Main'

interface ownProps{
	name:string,
	href:string
}

const App:React.FC =() => {
  return (
    <>
     <Main/>
    </>
  );
}

export default App;
