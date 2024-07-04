"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter, Cursor } from "react-simple-typewriter";
import ButtonsProvider from "./components/ButtonsProvider";

export default function Home() {
  const words = ["Front-end", "Back-end", "Full-Stack"];
  return (
    <section className="w-full h-[calc(100vh-80px)] flex items-center justify-center flex-col gap-2">
      <h1>
        hello world, I'am a{" "}
        <span className="text-orange-500">
          <Typewriter words={words} loop typeSpeed={100} />
          <Cursor />
        </span>{" "}
      </h1>
      <ButtonsProvider />
    </section>
  );
}
