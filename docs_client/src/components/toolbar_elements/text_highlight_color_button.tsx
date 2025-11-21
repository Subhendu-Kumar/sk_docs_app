import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HighlighterIcon } from "lucide-react";
import { ColorResult, SketchPicker } from "react-color";
import { useEditorStore } from "@/store/use_editor_store";

const TextHighlightColorButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("highlight").color || "#ffffff";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="h-7 w-7 flex-col flex items-center justify-center rounded-sm 
             hover:bg-neutral-200/80 p-1 focus:outline-0 gap-0.5"
      >
        <HighlighterIcon className="size-3" />
        <div
          className="w-full h-1 rounded-sm"
          style={{ backgroundColor: value }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-0 p-0">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TextHighlightColorButton;
