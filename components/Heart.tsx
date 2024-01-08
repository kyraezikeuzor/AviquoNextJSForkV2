'use client'

import React, { useEffect, useState } from "react";
import Heart from "react-animated-heart";

export default function AnimatedHeart({likeTrigger, className, oppId, liked}:{likeTrigger:(l:boolean, o:string)=>void, className: string, oppId: string, liked: boolean}) {
  const [isClick, setClick] = useState(liked);

  return (
    <div className={className}>
      <Heart isClick={isClick} onClick={() => {
        likeTrigger(!isClick, oppId);
        setClick(!isClick)}
      } />
    </div>
  );
}