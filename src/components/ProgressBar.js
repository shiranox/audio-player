import React, { useEffect, useState } from 'react'

const ProgressBar = ({isPlaying}) => {
    const [completed, setCompleted] = useState({
        count: 0
    });
    useEffect(() => {
        if (isPlaying){
            setInterval(() => {
                setCompleted(completed.count+=5.8)
                if(completed.count > 99) {
                    setCompleted(completed.count=0);
                } 
            }, 1000);
        }
        else {
            clearInterval()
        }
    }, [isPlaying]);

const containerStyles = {
    height: 15,
    width: '20%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: 50,
    marginLeft:10,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: 'hotpink',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};
export default ProgressBar