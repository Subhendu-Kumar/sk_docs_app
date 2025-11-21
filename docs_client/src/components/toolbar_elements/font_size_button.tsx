"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useEditorStore } from "@/store/use_editor_store";
import { ChangeEvent, KeyboardEvent, useState } from "react";

const FontSizeButton = () => {
  const { editor } = useEditorStore();

  const currentFontSize = editor?.getAttributes("textStyle").fontSize
    ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
    : "16";

  const [isEditing, setIsEditing] = useState(false);
  const [fontSize, setFontSize] = useState(currentFontSize);
  const [inputValue, setInputValue] = useState(currentFontSize);

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0) {
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setFontSize(size.toString());
      setInputValue(size.toString());
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    updateFontSize(inputValue);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      updateFontSize(inputValue);
      editor?.commands.focus();
    }
  };

  const incrementFontSize = () => {
    const newSize = (parseInt(fontSize) + 1).toString();
    updateFontSize(newSize);
  };

  const decrementFontSize = () => {
    const newSize = (parseInt(fontSize) - 1).toString();
    if (parseInt(newSize) > 0) {
      updateFontSize(newSize);
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-0.5">
      <button
        onClick={decrementFontSize}
        className="flex h-7 w-7 items-center justify-center rounded-sm hover:bg-neutral-200/80"
      >
        <MinusIcon className="size-4" />
      </button>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="h-7 w-10 text-center text-sm rounded-sm hover:bg-neutral-200/80 focus:outline-0 border-0"
        />
      ) : (
        <button
          onClick={() => {
            setIsEditing(true);
            setFontSize(currentFontSize);
          }}
          className="h-7 w-10 text-center text-sm rounded-sm hover:bg-neutral-200/80"
        >
          {currentFontSize}
        </button>
      )}
      <button
        onClick={incrementFontSize}
        className="flex h-7 w-7 items-center justify-center rounded-sm hover:bg-neutral-200/80"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
};

export default FontSizeButton;
