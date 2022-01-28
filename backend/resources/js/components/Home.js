import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chatroom from './ChatRoom';
import Header from './Header';
import Main from './Main';
 
function Home() {
    return (
        <div style={{height:"100vh",width:"100vw",  zIndex: "-100"}}>
          
        <Router>
           
           <Switch>
             <Route path="/chatRooms/:id"><Chatroom /></Route>
             <Route path="/"> <Main/> </Route>
            </Switch>
        </Router>
        </div>
       
    );
}

export default Home;

if (document.getElementById('app')) {
    ReactDOM.render((
        
          <Home />
        
      ), document.getElementById('app'))}