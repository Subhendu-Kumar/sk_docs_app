import { LucideIcon } from "lucide-react";

export interface Section {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick: () => void;
}

export interface ToolbarButtonProps {
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
}

export interface Font {
  label: string;
  value: string;
}

export interface Heading {
  label: string;
  value: number;
  fontSize: string;
}

type AlignmentValue = "left" | "center" | "right" | "justify";

export interface Alignment {
  label: string;
  icon: LucideIcon;
  value: AlignmentValue;
}

export interface LineHight {
  label: string;
  value: string;
}
