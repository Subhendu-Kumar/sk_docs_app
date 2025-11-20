import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import ToolbarButton from "@/components/toolbar/toolbar_button";
import { useEditorStore } from "@/store/use_editor_store";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FontFamilyButton from "./toolbar/font_family_button";
import HeadingLevelButton from "./toolbar/heading_level_button";
import TextColorButton from "./toolbar/text_color_button";
import TextHighlightColorButton from "./toolbar/text_highlight_color_button";
import LinkButton from "./toolbar/link_button";

interface Section {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
}

const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: Section[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => {},
        isActive: false,
      },
      {
        label: "List todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-3xl min-h-10 flex items-center gap-1 overflow-x-auto">
      {sections.map((sectionGroup, groupIdx) => (
        <div key={groupIdx} className="flex items-center gap-x-0.5">
          {groupIdx === 2 && (
            <>
              <LinkButton />
            </>
          )}
          {sectionGroup.map((section, idx) => (
            <Tooltip key={idx + section.label}>
              <TooltipTrigger asChild>
                <ToolbarButton {...section} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{section.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          {groupIdx === 1 && (
            <>
              <TextColorButton />
              <TextHighlightColorButton />
            </>
          )}
          {groupIdx !== sections.length - 1 && (
            <div className="h-5 border-r border-gray-500 mx-2" />
          )}
        </div>
      ))}
      <div className="h-5 border-r border-gray-500 mx-2" />
      <FontFamilyButton />
      <div className="h-5 border-r border-gray-500 mx-2" />
      <HeadingLevelButton />
    </div>
  );
};

export default Toolbar;
