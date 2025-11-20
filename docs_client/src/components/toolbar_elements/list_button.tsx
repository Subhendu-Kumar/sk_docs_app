import { useEditorStore } from "@/store/use_editor_store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListIcon, ListOrderedIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ListButton = () => {
  const { editor } = useEditorStore();

  const lists = [
    {
      label: "Bulleted List",
      icon: ListIcon,
      active: editor?.isActive("bulletlist"),
      action: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Ordered List",
      icon: ListOrderedIcon,
      active: editor?.isActive("orderedlist"),
      action: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="h-7 w-7 flex items-center justify-center rounded-sm 
             hover:bg-neutral-200/80 p-1 focus:outline-0"
      >
        <ListIcon className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {lists.map((list, idx) => {
          return (
            <button
              key={idx}
              onClick={list.action}
              className={cn(
                "flex items-center justify-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                list.active && "bg-neutral-200/80"
              )}
            >
              <list.icon className="size-4" />
              <span className="text-sm">{list.label}</span>
            </button>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ListButton;
