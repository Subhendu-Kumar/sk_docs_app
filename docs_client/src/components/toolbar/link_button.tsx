"use client";

import { useEditorStore } from "@/store/use_editor_store";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link2Icon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LinkButton = () => {
  const { editor } = useEditorStore();

  const [value, setValue] = useState("");

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setValue("");
  };

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) {
          setValue(editor?.getAttributes("link").href || "");
        }
      }}
    >
      <DropdownMenuTrigger
        className="h-7 w-7 flex items-center justify-center rounded-sm 
             hover:bg-neutral-200/80 p-1 focus:outline-0"
      >
        <Link2Icon className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex items-center gap-2 p-3">
        <Input
          placeholder="https://example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => onChange(value)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinkButton;
