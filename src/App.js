import React from 'react'; 
import './App.css';
import Header from './components/Header/Header'; //Header - zmienna, która przyjmuje znaczenie funkcji z wskazanego pliku
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import {BrowserRouter, Route } from 'react-router-dom';

function App(props) {

  
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wraper-content'>
          <Route exact path='/' render={ () => <Profile posts={props.state.profilePage.posts}/>} /> 
          <Route exact path='/profile' render={ () => <Profile posts={props.state.profilePage.posts}/>} /> {/* toczny adres, jeśli będzie profile/blabla/1 -> nie wyświetli zawartość komponentu profile, bez exact - wyświetli */}
          <Route exact path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>} />
          <Route exact path='/news' component={News} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/settings' component={Settings} />
        </div>
   
      </div>
  );
}

export default App;
