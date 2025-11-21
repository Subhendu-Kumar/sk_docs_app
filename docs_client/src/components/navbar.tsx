"use client";

import Link from "next/link";
import Image from "next/image";
import DocInput from "./doc_input";
import NavMenubar from "./nav_menubar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isDocPage = pathname.startsWith("/docs/");

  return (
    <nav className="flex items-center justify-between px-10 h-14 border-b w-full fixed top-0 left-0 right-0 z-10 bg-white print:hidden">
      <Link href={"/"} className="flex items-center justify-center space-x-2">
        <Image src="/globe.svg" alt="Next.js Logo" height={24} width={24} />
        <p className="font-serif font-semibold text-xl">Sk Docs</p>
      </Link>
      {isDocPage && <NavMenubar />}
      {isDocPage && <DocInput />}
    </nav>
  );
};

export default Navbar;
