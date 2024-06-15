"use client";
import React, { useEffect, useState } from "react";
import Home from "./widgets/home/Home";
import About from "./widgets/about/About";
import Nav from "./widgets/Nav/Nav";
import Slider from "./widgets/slider/Slider";
import Telegram from "./widgets/telegram/Telegram";
import Test from "./widgets/test/Test";
import Accordion from "./widgets/accordion/Accordion";
import Tel from "./widgets/tel2/Tel";
import Contact from "./widgets/contact/Contact";
import { AnimatePresence } from "framer-motion";
import Preloader from "./widgets/preloader/Preloader";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const items = [
    "🔳Subscribe🔳",
    "Trading Boss",
    "🔳Subscribe🔳",
    "Trading Boss",
    "🔳Subscribe🔳",
    "Trading Boss",
    "🔳Subscribe🔳",
    "Trading Boss",
    "🔳Subscribe🔳",
    "Trading Boss",
  ];
  const itemstwo = [
    "Quick_Payouts",
    "Happy_clients",
    "Sure_returns",
    "Live_stats",
    "Quick_Payouts",
    "Happy_clients",
    "Sure_returns",
    "Live_stats",
    "Sure_returns",
    "Live_stats",
  ];

  const accordionItems = [
    {
      title:
        "▼What are the sources you would recommend for someone looking to learn about trading?",
      content:
        "YouTube, Book And Most Important Source TO Learn Fast Is Through People So Ask Alot Of People",
    },
    {
      title:
        "▼Where can I find communities or individuals who are highly skilled and knowledgeable at trading?",
      content: "Guess We Can Answer Your Question Very Well Its Our Telegram",
    },
    {
      title:
        "▼Do you happen to have a Discord server or a voice chat room for discussions related to trading?",
      content:
        "Currently We Are YouTube And Discord But If In Future We Need To Expand We Will Do",
    },
    {
      title:
        "▼Would you recommend taking up full-time trading as a viable and potentially successful career option?",
      content: "Yes IF You Know What You Doing, No If You Dont Know Anything",
    },
    {
      title:
        "▼What are the most effective and efficient ways for me to quickly learn and understand the key concepts of trading?",
      content:
        "We Have Our YouTube Channels Which Have Everything You Need TO Know About Trading And You Can Request Us",
    },
  ];

  const accordionItemsTwo = [
    {
      title: "How do I Learn Trading Concept Fast?",
      content:
        "We Have Our YouTube Channels Which Have Everything You Need TO Know About Trading And You Can Request Us",
    },
    {
      title: "What Are Sources You Recommend To Learn Trading?",
      content:
        "YouTube, Book And Most Important Source TO Learn Fast Is Through People So Ask Alot Of People",
    },
    {
      title: "Where I Will Find People Who Are Good At Trading?",
      content: "Guess We Can Answer Your Question Very Well Its Our Telegram",
    },
    {
      title: "Did You Recommend Full Time Trading?",
      content: "Yes IF You Know What You Doing, No If You Dont Know Anything",
    },
    {
      title: "Did You Have Discord Server Or Voice Chat Room?",
      content:
        "Currently We Are YouTube And Discord But If In Future We Need To Expand We Will Do",
    },
  ];
  // ✔  ▣
  return (
    <div className="page">
        <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Nav />
      <Home />
      <Slider
        items={items}
        width="100px"
        height="50px"
        quantity={10}
        reverse={false}
      />
      <About />
      <Telegram />
      <Test />
      <Slider
        items={itemstwo}
        width="100px"
        height="50px"
        quantity={10}
        reverse={false}
      />
      <Accordion items={accordionItems} itemsTwo={accordionItemsTwo} />
      <Tel />
      <Contact />
    </div>
  );
};

export default page;
