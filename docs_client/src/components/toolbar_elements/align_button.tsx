import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { AlignLeftIcon } from "lucide-react";
import { alignments } from "@/data/toolbar_data";
import { useEditorStore } from "@/store/use_editor_store";

const AlignButton = () => {
  const { editor } = useEditorStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="h-7 w-7 flex items-center justify-center rounded-sm 
             hover:bg-neutral-200/80 p-1 focus:outline-0"
      >
        <AlignLeftIcon className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {alignments.map((alignment, idx) => {
          return (
            <button
              key={idx}
              onClick={() =>
                editor?.chain().focus().setTextAlign(alignment.value).run()
              }
              className={cn(
                "flex items-center justify-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                editor?.isActive({ textAlign: alignment.value }) &&
                  "bg-neutral-200/80"
              )}
            >
              <alignment.icon className="size-4" />
              <span className="text-sm">{alignment.label}</span>
            </button>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlignButton;
