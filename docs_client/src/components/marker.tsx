import { ChevronDown } from "lucide-react";
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
  return (
    <div
      className="absolute top-0 w-4 h-full cursor-ew-resize z-5 group -ml-2"
      style={{ [isLeft ? "left" : "right"]: `${position}px` }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <ChevronDown className="absolute left-1/2 top-0 h-full fill-blue-600 transform -translate-x-1/2" />
      <div
        className="absolute left-1/2 top-4 transform -translate-x-1/2"
        style={{
          width: "1px",
          height: "100vh",
          transform: "scaleX(0.5)",
          backgroundColor: "#3b72f6",
          display: isDragging ? "block" : "none",
        }}
      />
    </div>
  );
};

export default Marker;
