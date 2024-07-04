"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeToggle";

const Nav = () => {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div></div>
      <ModeToggle />
    </nav>
  );
};

export default Nav;
