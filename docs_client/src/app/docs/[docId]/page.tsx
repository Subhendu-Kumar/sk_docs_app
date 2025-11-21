"use client";

import { use } from "react";
import Editor from "@/components/editor";
import Toolbar from "@/components/toolbar";

const DocPage = ({ params }: { params: Promise<{ docId: string }> }) => {
  const { docId } = use(params);
  console.log(docId);

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <div className="flex gapy-2 fixed top-14 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        <Toolbar />
      </div>
      <div className="pt-26 print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default DocPage;
