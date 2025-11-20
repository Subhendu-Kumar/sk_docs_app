import { LucideIcon, Undo2Icon } from "lucide-react";
import ToolbarButton from "./toolbar_button";
import { useEditorStore } from "@/store/use_editor_store";

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
    ],
  ];

  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-3xl min-h-10 flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((section) => {
        return <ToolbarButton key={section.label} {...section} />;
      })}
    </div>
  );
};

export default Toolbar;
