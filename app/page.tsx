"use client";
import { HeroParallax } from "@/components/hero-parallax";
import React from "react";

export default function Home() {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
    },
  
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
    },
  
    {
      title: "Algochurn",
      link: "/docs/getting-started/introduction",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
    },  
  ];
  
  return <HeroParallax products={products} />;
}
 