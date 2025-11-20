import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link href="/docs/123">
        <Button>Go to Docs Editor</Button>
      </Link>
    </div>
  );
};

export default Home;
