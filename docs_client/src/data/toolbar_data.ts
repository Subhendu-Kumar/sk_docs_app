import {
  AlignLeftIcon,
  AlignRightIcon,
  AlignCenterIcon,
  AlignJustifyIcon,
} from "lucide-react";
import { Alignment, Font, Heading, LineHight } from "@/types/toolbar_types";

export const fonts: Font[] = [
  { label: "Arial", value: "Arial" },
  { label: "Georgia", value: "Georgia" },
  { label: "Verdana", value: "Verdana" },
  { label: "Courier New", value: "Courier New" },
  { label: "Times New Roman", value: "Times New Roman" },
];

export const headings: Heading[] = [
  { label: "Normal text", value: 0, fontSize: "16px" },
  { label: "Heading 1", value: 1, fontSize: "32px" },
  { label: "Heading 2", value: 2, fontSize: "24px" },
  { label: "Heading 3", value: 3, fontSize: "20px" },
  { label: "Heading 4", value: 4, fontSize: "18px" },
  { label: "Heading 5", value: 5, fontSize: "16px" },
];

export const alignments: Alignment[] = [
  {
    label: "Align Left",
    icon: AlignLeftIcon,
    value: "left",
  },
  {
    label: "Align Center",
    icon: AlignCenterIcon,
    value: "center",
  },
  {
    label: "Align Right",
    icon: AlignRightIcon,
    value: "right",
  },
  {
    label: "Align Justify",
    icon: AlignJustifyIcon,
    value: "justify",
  },
];

export const lineHeights: LineHight[] = [
  {
    label: "Default",
    value: "normal",
  },
  {
    label: "Single",
    value: "1",
  },
  {
    label: "1.15",
    value: "1.15",
  },
  {
    label: "1.5",
    value: "1.5",
  },
  {
    label: "Double",
    value: "2",
  },
];
