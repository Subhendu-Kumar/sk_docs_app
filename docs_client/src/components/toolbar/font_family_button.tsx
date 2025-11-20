import { useEditorStore } from "@/store/use_editor_store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FontFamilyButton = () => {
  const { editor } = useEditorStore();

  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: "Courier New" },
    { label: "Georgia", value: "Georgia" },
    { label: "Verdana", value: "Verdana" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm bg-neutral-200">
        <span className="truncate">
          {editor?.getAttributes("textStyles").FontFamily || "Arial"}
        </span>
        <ChevronDownIcon className="ml-2 size-4 shrink-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Font Family</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {fonts.map((font, idx) => {
          return (
            <DropdownMenuItem
              key={idx}
              onClick={() =>
                editor?.chain().focus().setFontFamily(font.value).run()
              }
              className={cn(
                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                editor?.getAttributes("textStyle").FontFamily === font.value &&
                  "bg-neutral-200/80"
              )}
              style={{ fontFamily: font.value }}
            >
              {font.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontFamilyButton;
