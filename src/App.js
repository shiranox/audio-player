import './App.css';
import React, {useState, useRef, useEffect} from 'react'
import ChannelsList from './components/ChannelsList';

import Home from './components/Home';

function App() {
  //const ref = useRef(new Audio(drums));

  return (
    <div className="App">
      {/* <header className="App-header">
        <div> 
        <title> Loop Machine </title>
        <AudioPlayer />

        </div>
      </header> */}
      {/* <ChannelsList /> */}
      <Home />
    </div>
  );
}

export default App;
