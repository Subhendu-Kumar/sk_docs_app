"use client";

import { useEditorStore } from "@/store/use_editor_store";
import { Fragment, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImageIcon, SearchIcon, UploadIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ImageButton = () => {
  const { editor } = useEditorStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const onChange = (src: string) => {
    editor?.chain().focus().setImage({ src }).run();
  };

  const onUpload = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        onChange(url);
      }
    };
    input.click();
  };

  const handleimageUrlSubmit = async () => {
    if (imageUrl) {
      onChange(imageUrl);
      setImageUrl("");
      setIsDialogOpen(false);
    }
  };

  return (
    <Fragment>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert Image Url</DialogTitle>
            <Input
              placeholder="image url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              onKeyDown={(e) => [e.key === "Enter" && handleimageUrlSubmit()]}
            />
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleimageUrlSubmit}>Apply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="h-7 w-7 flex items-center justify-center rounded-sm 
        hover:bg-neutral-200/80 p-1 focus:outline-0"
        >
          <ImageIcon className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex items-center gap-2 p-3">
          <DropdownMenuItem onClick={onUpload}>
            <UploadIcon className="size-4 mr-2" /> Upload
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <SearchIcon className="size-4 mr-2" /> Paste Image Url
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  );
};

export default ImageButton;
