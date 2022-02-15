import React, { useState } from 'react';
import ChannelsList from './ChannelsList';
import ControlPanel from './ControlPanel';
import ProgressBar from './ProgressBar';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  
  return (
    <div>
        <ControlPanel
         setIsLooping={setIsLooping}
         isLooping={isLooping}
         isPlaying={isPlaying}
         setIsPlaying={setIsPlaying}
          />
        <ChannelsList isPlaying={isPlaying} isLooping={isLooping}/>
        <ProgressBar isPlaying={isPlaying}/>
    </div>
  )
}


export default Home