import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface ToolbarButtonProps {
  onClick?: () => void;
  icon: LucideIcon;
  isActive?: boolean;
}

const ToolbarButton: FC<ToolbarButtonProps> = ({
  onClick,
  icon: Icon,
  isActive,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export default ToolbarButton;
