"use client";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { FeaturesSectionDemo } from "@/components/feature-section-demo";
import { HeroParallax } from "@/components/hero-parallax";
import { SparklesPreview } from "@/components/sparklesdemo";
import React from "react";

export default function Home() {
  const products = [
    {
      title: "Easy Chatbot",
      link: "https://easy-chatbot-five.vercel.app/",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-chatbot.png",
    },
    {
      title: "Designfast",
      link: "https://designfastt.vercel.app/",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-designfast.png",
    },
  
    {
      title: "Easy Docs",
      link: "https://easy-docs-lemon.vercel.app/",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-docs.png",
    },
    {
      title: "Easy Nextui",
      link: "https://easy-nextui.vercel.app/",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-nextui.png",
    },
    {
      title: "Easy Portfolio",
      link: "https://kathann.vercel.app/home",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio.png",
    },
  
    {
      title: "Getting Started",
      link: "/docs/getting-started/introduction",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-quotes.png",
    },
    {
      title: "Easy Retro",
      link: "https://retro-template.vercel.app/",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-retro.png",
    },
    {
      title: "Easy Template",
      link: "https://ez-template1.vercel.app/",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-template.png",
    },
    {
      title: "Easy Waitlist",
      link: "https://easy-waitlist.vercel.app/",
      thumbnail:
        "https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-waitlist.png",
    },  
  ];
  
  return <div>
 <HeroParallax products={products} />
  <InfiniteMovingCardsDemo />
  <FeaturesSectionDemo />
  <SparklesPreview />
  </div>
 ;
}
 