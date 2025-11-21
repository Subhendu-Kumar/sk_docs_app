import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColorResult, SketchPicker } from "react-color";
import { useEditorStore } from "@/store/use_editor_store";

const TextColorButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("textStyle").color || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="h-7 w-7 flex flex-col items-center justify-center rounded-sm 
             hover:bg-neutral-200/80 p-1 gap-0.5 focus:outline-0"
      >
        <span className="text-xs font-medium uppercase leading-none">A</span>
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

export default TextColorButton;
