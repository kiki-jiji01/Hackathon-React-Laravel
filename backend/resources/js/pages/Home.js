import React from 'react';
import ReactDOM from 'react-dom';
import {
        BrowserRouter,
        Route,
        Router,
        Switch,
      } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

 
function Home() {
    return (
        <div style={{height:"100vh",width:"100vw", top: "-40vh", position: "absolute" , zIndex: "-100"}}>
            {/* <Header/> */}
            <Main/>
        </div>
       
    );
}

export default Home;

if (document.getElementById('app')) {
    ReactDOM.render((
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      ), document.getElementById('app'))}