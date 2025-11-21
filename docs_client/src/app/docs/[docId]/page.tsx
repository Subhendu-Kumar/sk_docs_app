"use client";

import { use } from "react";
import Editor from "@/components/editor";
import Toolbar from "@/components/toolbar";
import Navbar from "@/components/navbar";

const DocPage = ({ params }: { params: Promise<{ docId: string }> }) => {
  const { docId } = use(params);
  console.log(docId);

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <div className="flex flex-col gapy-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[100px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default DocPage;
