// pages/trailer/[ytTrailerId].tsx
'use client'
import React from 'react';
import ReactPlayer from 'react-player';

const Trailer = ({params} : {params: {trailerId: string}}) => {


  const videoUrl = `https://www.youtube.com/watch?v=${params.trailerId}`;

  return (
    <div className="h-[90vh]">
      <ReactPlayer controls={true} playing={true} url={videoUrl} width="100%" height="100%" />
    </div>
  );
};

export default Trailer;
