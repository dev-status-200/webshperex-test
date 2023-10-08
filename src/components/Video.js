"use client"
import ReactPlayer from "react-player";
import React, { useState, useEffect } from 'react';

const Video = () => {
const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
      setHasWindow(true);
  }, []);
return (
  <div>
     <ReactPlayer url='/search.mp4' 
        width={900} 
        height={700} 
        playing={false}
        playIcon={<button>plays</button>}
    />
  </div>
)}
export default Video