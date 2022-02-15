import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components';
//Channel item deals with PLAY, STOP and MUTE funcionality, 
//and diplaying color lines with Mute toggle button

const ChannelItem = ({track, isPlaying, isLooping}) => {
  const [isOnMute, setIsOnMute] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    if (isLooping) {
        audioRef.current.loop = true;
    } else {
        audioRef.current.loop = false;
    }
  }, [isLooping]);
  useEffect(() => {
    if (isOnMute) {
        audioRef.current.volume=0;
    } 
    else {
        audioRef.current.volume=1;
    }
  }, [isOnMute]);
    useEffect(() => {
      if (isPlaying) {
          audioRef.current.play();
      } else {
          audioRef.current.pause();
          audioRef.current.load();
      }
    }, [isPlaying]);

      return (
    <div 
    style={{
      backgroundColor: track.color,
      borderRadius:"10px",
      marginLeft:"10px",
      width:"300px"
      }}>
      <div 
        style={{
        backgroundColor: 'white',
        width:"300px",
        fontWeight: 'bold'
      }}>
        {track.title}
      </div>  
    <audio  src={track.audio} ref={audioRef} />

    <Flex>
        <Switcher selected={isOnMute} />
            <Text
            onClick={() => setIsOnMute(true)}>
            Mute
            </Text>
            <Text
            onClick={() => setIsOnMute(false)}>
            UnMute
            </Text>
        </Flex>   
    </div>
  )
}


const Flex = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: grey;
  height: 20px;
  width: 120px;
  position: relative;
  margin-bottom: 5px;
`;
const Switcher = styled.div`
  background: black;
  border-radius: 2px;
  height: 20px;
  line-height: 41px;
  width: 50%;
  cursor: pointer;
  position: absolute;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 1;
  left: ${({ selected }) =>
    selected === true ? "0px" : "60px"};
`;

const Text = styled.div`
  color: ${({ selected }) => (selected ? "black" : "white")};
  font-size: 13px;
  font-weight: 20;
  line-height: 4px;
  padding: 30;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;
export default ChannelItem