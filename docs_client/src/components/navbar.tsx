import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-3 border-b">
      <Link href={"/"} className="flex items-center justify-center space-x-2">
        <Image src="/globe.svg" alt="Next.js Logo" height={24} width={24} />
        <p className="font-serif font-semibold text-xl">Sk Docs</p>
      </Link>
    </nav>
  );
};

export default Navbar;
