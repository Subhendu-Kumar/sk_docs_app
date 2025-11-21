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
      <Navbar />
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocPage;
