import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ListCollapseIcon } from "lucide-react";
import { lineHeights } from "@/data/toolbar_data";
import { useEditorStore } from "@/store/use_editor_store";

const LineHeightButton = () => {
  const { editor } = useEditorStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="h-7 w-7 flex items-center justify-center rounded-sm 
             hover:bg-neutral-200/80 p-1 focus:outline-0"
      >
        <ListCollapseIcon className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {lineHeights.map((lineHeight, idx) => {
          return (
            <button
              key={idx}
              onClick={() =>
                editor?.chain().focus().setLineHeight(lineHeight.value).run()
              }
              className={cn(
                "px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                editor?.getAttributes("paragraph").lineHeight ===
                  lineHeight.value && "bg-neutral-200/80"
              )}
            >
              <span className="text-sm">{lineHeight.label}</span>
            </button>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LineHeightButton;
