"use client";

import { use } from "react";
import Editor from "./editor";
import ToolBar from "./toolbar";

const DocPage = ({ params }: { params: Promise<{ docId: string }> }) => {
  const { docId } = use(params);
  console.log(docId)

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <ToolBar />
      <Editor />
    </div>
  );
};

export default DocPage;
