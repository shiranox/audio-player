import React, { useEffect, useState } from 'react'
import audios from '../assets/Channels'
import ChannelItem from './ChannelItem';

//Channelslist deals with mapping audios (assets-audios array)
//passing props to channelItem

const ChannelsList = ({isPlaying, isLooping}) => {
    const [trackToPlay, setTrackToPlay] = useState();
    useEffect(()=> {
        setTrackToPlay(audios())
    },[])

  return (
    <div>
        {trackToPlay  && trackToPlay.map((track, index) => (
            <ChannelItem  
            key={index} 
            track={track}
            isPlaying={isPlaying} 
            isLooping={isLooping}/>
        ))}
    </div>
  )
}

export default ChannelsList