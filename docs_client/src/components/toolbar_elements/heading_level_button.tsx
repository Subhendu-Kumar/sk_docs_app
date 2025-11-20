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
import { Level } from "@tiptap/extension-heading";
import { headings } from "@/data/toolbar_data";

const HeadingLevelButton = () => {
  const { editor } = useEditorStore();

  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }
    return "Normal text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm bg-neutral-200">
        <span className="truncate">{getCurrentHeading()}</span>
        <ChevronDownIcon className="ml-2 size-4 shrink-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Heading Level</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {headings.map((heading, idx) => {
          return (
            <DropdownMenuItem
              key={idx}
              onClick={() => {
                if (heading.value === 0) {
                  editor?.chain().focus().setParagraph().run();
                } else {
                  editor
                    ?.chain()
                    .focus()
                    .toggleHeading({ level: heading.value as Level })
                    .run();
                }
              }}
              className={cn(
                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                (heading.value === 0 && !editor?.isActive("heading")) ||
                  (editor?.isActive("heading", { level: heading.value }) &&
                    "bg-neutral-200/80")
              )}
              style={{ fontSize: heading.fontSize }}
            >
              {heading.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeadingLevelButton;
