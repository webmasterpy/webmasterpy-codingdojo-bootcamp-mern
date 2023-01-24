import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
import Descripciones from './Components/Descripciones';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main>
        <SubContents>
          <Descripciones/>
        </SubContents>
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;

