import { FC } from "react";

interface MarkerProps {
  isLeft: boolean;
  position: number;
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDoubleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Marker: FC<MarkerProps> = ({
  isLeft,
  position,
  isDragging,
  onMouseDown,
  onDoubleClick,
}) => {
  return <div>Marker</div>;
};

export default Marker;
