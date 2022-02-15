import React from 'react';
import {ImPlay2} from "react-icons/im"
import {ImStop} from "react-icons/im"
import styled from "styled-components"
//This component is responsible for the LOOP and PLAY/STOP buttons

const ControlPanel = ({setIsLooping, isLooping, isPlaying, setIsPlaying}) => {
  return ( 
    <div> 
    <PlayButton>
        {!isPlaying ? (
        <button type="button" 
        className="play" 
        onClick={() => setIsPlaying(true)}> 
        <ImPlay2></ImPlay2> Play 
        </button>
        ) : (
        <button type="button"
        className="pause"
        onClick={() => setIsPlaying(false)}> 
        <ImStop></ImStop> Stop 
        </button> 
        )}
    </PlayButton>
        <Flex>
            <Switcher selected={isLooping} />
            <Text
            onClick={() => setIsLooping(true)}>
            Loop
            </Text>
            <Text
            onClick={() => setIsLooping(false)}>
            Unloop
            </Text>
        </Flex>
</div>
)}
const PlayButton = styled.div`
margin-top: 5px;
margin-left: 10px;
display: flex;
align-items: center;
border-radius: 2px;
height: 20px;
width: 120px;
position: relative;
margin-bottom: 5px;
`;

const Flex = styled.div`
margin-top: 5px;
margin-left: 10px;
display: flex;
align-items: center;
border-radius: 2px;
background: grey;
height: 20px;
width: 120px;
position: relative;
margin-bottom: 25px;
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

export default ControlPanel