import { MouseEvent } from "react";

export interface MarkerProps {
  isLeft: boolean;
  position: number;
  isDragging: boolean;
  onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  onDoubleClick: (e: MouseEvent<HTMLDivElement>) => void;
}
