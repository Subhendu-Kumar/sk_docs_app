import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import ToolbarButton from "@/components/toolbar_elements/toolbar_button";
import { useEditorStore } from "@/store/use_editor_store";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FontFamilyButton from "./toolbar_elements/font_family_button";
import HeadingLevelButton from "./toolbar_elements/heading_level_button";
import TextColorButton from "./toolbar_elements/text_color_button";
import TextHighlightColorButton from "./toolbar_elements/text_highlight_color_button";
import LinkButton from "./toolbar_elements/link_button";
import { Fragment } from "react";
import ImageButton from "./toolbar_elements/image_button";
import { Section } from "@/types/toolbar_types";
import AlignButton from "./toolbar_elements/align_button";
import ListButton from "./toolbar_elements/list_button";
import FontSizeButton from "./toolbar_elements/font_size_button";
import LineHeightButton from "./toolbar_elements/line_height_button";

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
      {
        label: "Strikethrough",
        icon: StrikethroughIcon,
        isActive: editor?.isActive("strike"),
        onClick: () => editor?.chain().focus().toggleStrike().run(),
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
    <div className="bg-[#f1f4f9] px-5 py-0.5 rounded-3xl h-10 flex items-center justify-center w-full gap-1">
      {sections.map((sectionGroup, groupIdx) => (
        <div key={groupIdx} className="flex items-center gap-x-0.5">
          {groupIdx === 2 && (
            <Fragment>
              <LinkButton />
              <ImageButton />
              <AlignButton />
              <ListButton />
              <LineHeightButton />
            </Fragment>
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
            <Fragment>
              <TextColorButton />
              <TextHighlightColorButton />
            </Fragment>
          )}
          {groupIdx !== sections.length - 1 && (
            <div className="h-5 border-r border-gray-500 mx-2" />
          )}
          {groupIdx === 0 && (
            <Fragment>
              <FontFamilyButton />
              <div className="h-5 border-r border-gray-500 mx-2" />
              <HeadingLevelButton />
              <div className="h-5 border-r border-gray-500 mx-2" />
              <FontSizeButton />
              <div className="h-5 border-r border-gray-500 mx-2" />
            </Fragment>
          )}
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
