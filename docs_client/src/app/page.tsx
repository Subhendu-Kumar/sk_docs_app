import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link href="/docs/123">go to docs editor</Link>
    </div>
  );
};

export default Home;
