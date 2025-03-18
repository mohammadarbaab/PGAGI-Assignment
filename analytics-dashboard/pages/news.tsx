"use client";
// pages/news.tsx
import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TopHeadlines from "../components/TopHeadlines";
const NewsApp = () => {
  return (
    <div>
      <main className="px-2 md:px-20">
        <Header />
        <Navbar />
        <section className="flex justify-between">
          <main className="mt-4">
            <TopHeadlines />
          </main>
        </section>
      </main>
    </div>
  );
};

export default NewsApp;
