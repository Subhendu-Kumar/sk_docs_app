"use client";

import {
  BoldIcon,
  FileIcon,
  TextIcon,
  FileText,
  FilePlus2,
  GlobeIcon,
  Redo2Icon,
  TrashIcon,
  Undo2Icon,
  ItalicIcon,
  PrinterIcon,
  FilePenIcon,
  FileTextIcon,
  FileJsonIcon,
  UnderlineIcon,
  StrikethroughIcon,
  RemoveFormattingIcon,
} from "lucide-react";
import {
  Menubar,
  MenubarSub,
  MenubarItem,
  MenubarMenu,
  MenubarContent,
  MenubarTrigger,
  MenubarShortcut,
  MenubarSeparator,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar";
import { useEditorStore } from "@/store/use_editor_store";

const NavMenubar = () => {
  const { editor } = useEditorStore();

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: true })
      .run();
  };

  const onDownload = (blob: Blob, filename: string) => {
    const Url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = Url;
    a.download = filename;
    a.click();
    a.remove();
    URL.revokeObjectURL(Url);
  };

  const exportJson = () => {
    if (!editor) {
      return;
    }
    const content = editor?.getJSON();
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json",
    });
    onDownload(blob, "document.json");
  };

  const exportHtml = () => {
    if (!editor) {
      return;
    }
    const content = editor?.getHTML();
    const blob = new Blob([content], {
      type: "text/html",
    });
    onDownload(blob, "document.html");
  };

  const exportText = () => {
    if (!editor) {
      return;
    }
    const content = editor?.getText();
    const blob = new Blob([content], {
      type: "text/plain",
    });
    onDownload(blob, "document.txt");
  };

  return (
    <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-neutral-200/80 cursor-pointer">
          File
        </MenubarTrigger>
        <MenubarContent className="print:hidden">
          <MenubarSub>
            <MenubarSubTrigger>
              <FileIcon className="size-4 mr-2" />
              Save
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={exportJson}>
                <FileJsonIcon className="size-4 mr-2" />
                JSON
              </MenubarItem>
              <MenubarItem onClick={exportHtml}>
                <GlobeIcon className="size-4 mr-2" />
                HTML
              </MenubarItem>
              <MenubarItem onClick={() => window.print()}>
                <FileText className="size-4 mr-2" />
                PDF
              </MenubarItem>
              <MenubarItem onClick={exportText}>
                <FileTextIcon className="size-4 mr-2" />
                TEXT
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            <FilePlus2 className="size-4 mr-2" />
            New Document
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <FilePenIcon className="size-4 mr-2" />
            Rename
          </MenubarItem>
          <MenubarItem>
            <TrashIcon className="size-4 mr-2" />
            Remove
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem onClick={() => window.print()}>
            <PrinterIcon className="size-4 mr-2" />
            Print
            <MenubarShortcut>Ctrl + p</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-neutral-200/80 cursor-pointer">
          Edit
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
            <Undo2Icon className="size-4 mr-2" />
            Undo
            <MenubarShortcut>Ctrl + z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
            <Redo2Icon className="size-4 mr-2" />
            Redo
            <MenubarShortcut>Ctrl + y</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-neutral-200/80 cursor-pointer">
          Insert
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Table</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}>
                1 X 1
              </MenubarItem>
              <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}>
                2 X 2
              </MenubarItem>
              <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}>
                3 X 3
              </MenubarItem>
              <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}>
                4 X 4
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-neutral-200/80 cursor-pointer">
          Format
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>
              <TextIcon className="size-4 mr-2" /> Text
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem
                onClick={() => editor?.chain().focus().toggleBold().run()}
              >
                <BoldIcon className="size-4 mr-2" />
                Bold
                <MenubarShortcut>Ctrl + b</MenubarShortcut>
              </MenubarItem>
              <MenubarItem
                onClick={() => editor?.chain().focus().toggleItalic().run()}
              >
                <ItalicIcon className="size-4 mr-2" />
                Italic
                <MenubarShortcut>Ctrl + i</MenubarShortcut>
              </MenubarItem>
              <MenubarItem
                onClick={() => editor?.chain().focus().toggleUnderline().run()}
              >
                <UnderlineIcon className="size-4 mr-2" />
                Underline
                <MenubarShortcut>Ctrl + u</MenubarShortcut>
              </MenubarItem>
              <MenubarItem
                onClick={() => editor?.chain().focus().toggleStrike().run()}
              >
                <StrikethroughIcon className="size-4 mr-2" />
                Strikethrough
                <MenubarShortcut>Ctrl + Shift + x</MenubarShortcut>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem
            onClick={() => editor?.chain().focus().unsetAllMarks().run()}
          >
            <RemoveFormattingIcon className="size-4 mr-2" />
            Clear Formatting
            <MenubarShortcut>Ctrl + \</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavMenubar;
