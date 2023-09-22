import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-lime-400">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-semibold">Best-Test.app</h1>
        </Link>
        <Link href="/profile" className="p-1 rounded-full hover:bg-lime-500">
          <Image src="/icons/profile.svg" width="40" height="40" alt="menu" />
        </Link>
      </div>
    </header>
  );
}
