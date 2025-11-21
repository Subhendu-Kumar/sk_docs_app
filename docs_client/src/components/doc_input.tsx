import { CloudCheck } from "lucide-react";

const DocInput = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">
        Untitled Document
      </span>
      <CloudCheck />
    </div>
  );
};

export default DocInput;
