"use client";

import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import { TableKit } from "@tiptap/extension-table";
import { useEditor, EditorContent } from "@tiptap/react";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { useEditorStore } from "@/store/use_editor_store";
import { TextStyle, FontFamily, Color } from "@tiptap/extension-text-style";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { FontSizeExtension } from "@/extensions/font_size";
import { LineHeightExtension } from "@/extensions/line_height";
import Ruler from "./ruler";

const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate: ({ editor }) => {
      setEditor(editor);
    },
    onDestroy: () => {
      setEditor(null);
    },
    onUpdate: ({ editor }) => {
      setEditor(editor);
    },
    onSelectionUpdate: ({ editor }) => {
      setEditor(editor);
    },
    onTransaction: ({ editor }) => {
      setEditor(editor);
    },
    onFocus: ({ editor }) => {
      setEditor(editor);
    },
    onBlur: ({ editor }) => {
      setEditor(editor);
    },
    onContentError: ({ editor }) => {
      setEditor(editor);
    },
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      Heading,
      TaskItem.configure({ nested: true }),
      TaskList,
      TableKit.configure({
        table: { resizable: true },
      }),
      Image,
      TextStyle,
      FontFamily,
      Color,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      FontSizeExtension,
      LineHeightExtension.configure({
        types: ["heading", "paragraph"],
        defaultLineHeight: "normal",
      }),
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
            </tr>
          </tbody>
        </table>
      `,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "focus:outline-none print:border-0 border bg-white border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
        style: "padding-left: 56px; padding-right: 56px;",
      },
    },
  });

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
