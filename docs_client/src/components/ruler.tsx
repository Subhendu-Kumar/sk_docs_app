"use client";

import { Fragment, MouseEvent, useRef, useState } from "react";
import Marker from "./marker";

const markers = Array.from({ length: 83 }, (_, i) => i);

const Ruler = () => {
  const [leftMargin, setLeftMargin] = useState<number>(56);
  const [rightMargin, setRightMargin] = useState<number>(56);

  const [isDraggingLeft, setIsDraggingLeft] = useState<boolean>(false);
  const [isDraggingRight, setIsDraggingRight] = useState<boolean>(false);

  const rulerRef = useRef<HTMLDivElement>(null);

  const handleLeftMouseDown = () => {
    setIsDraggingLeft(true);
  };

  const handleRightMouseDown = () => {
    setIsDraggingRight(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector("#ruler-container");
      if (container) {
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const clampedX = Math.max(0, Math.min(offsetX, 816));
        if (isDraggingLeft) {
          const maxLeft = 816 - rightMargin - 200;
          const newLeft = Math.min(clampedX, maxLeft);
          setLeftMargin(newLeft);
        } else if (isDraggingRight) {
          const maxRight = 816 - (leftMargin + 200);
          const newRight = Math.max(816 - clampedX, 0);
          const constrainedRight = Math.min(newRight, maxRight);
          setRightMargin(constrainedRight);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  const handleLeftDoubleClick = () => {
    setLeftMargin(56);
  };

  const handleRightDoubleClick = () => {
    setRightMargin(56);
  };

  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="h-6 max-w-[816px] mx-auto border-b border-gray-300 flex items-end relative select-none print:hidden"
    >
      <div id="ruler-container" className="w-full h-full relative">
        <Marker
          position={leftMargin}
          isLeft={true}
          isDragging={isDraggingLeft}
          onMouseDown={handleLeftMouseDown}
          onDoubleClick={handleLeftDoubleClick}
        />
        <Marker
          position={rightMargin}
          isLeft={false}
          isDragging={isDraggingRight}
          onMouseDown={handleRightMouseDown}
          onDoubleClick={handleRightDoubleClick}
        />
        <div className="absolute inset-x-0 bottom-0 h-full">
          <div className="relative h-full w-[816px]">
            {markers.map((marker) => {
              const position = (marker * 816) / 82;
              return (
                <div
                  key={marker}
                  className="absolute bottom-0"
                  style={{ left: `${position}px` }}
                >
                  {marker % 10 === 0 && (
                    <Fragment>
                      <div className="absolute bottom-0 w-px h-2 bg-neutral-600" />
                      <span className="absolute bottom-2 text-[10px] text-neutral-600 transform -translate-x-1/2">
                        {marker / 10 + 1}
                      </span>
                    </Fragment>
                  )}
                  {marker % 5 === 0 && marker % 10 !== 0 && (
                    <div className="absolute bottom-0 w-px h-1.5 bg-neutral-600" />
                  )}
                  {marker % 5 !== 0 && marker % 10 !== 0 && (
                    <div className="absolute bottom-0 w-px h-1 bg-neutral-600" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ruler;
