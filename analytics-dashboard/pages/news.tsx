"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// News API Configuration
const newsApi = "804b5ac5eb154a81ad4dc4b10ada6b7f";
const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApi}`;

// NewsCard Component
const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <Image
        src={article.urlToImage || "/default-image.jpg"}
        alt={article.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
        unoptimized={true}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{article.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{article.description}</p>
        <p className="text-gray-500 text-xs mt-2 line-clamp-3">{article.content}</p>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = ({ categories, setCategory }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 my-8">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${
            cat === setCategory
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          } px-4 py-2 rounded-md text-sm font-medium transition-all duration-300`}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

// Main Page Component
const Page = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0); // To store the total number of news articles
  const categories = ["all", "business", "sports", "technology"];

  const fetchNews = () => {
    const query = category === "all" ? "" : `&category=${category}`;
    const searchQuery = searchTerm ? `&q=${searchTerm}` : "";
    const paginatedQuery = `&page=${page}&pageSize=10`;

    fetch(newsApiUrl + query + searchQuery + paginatedQuery)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles || []);
        setTotalResults(data.totalResults || 0); // Update the total number of results
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNews();
  }, [category, searchTerm, page]);

  const totalPages = Math.ceil(totalResults / 10); // Calculate total number of pages

  return (
    <>
      <Head>
        <title>News App</title>
        <meta name="description" content="A news app built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-blue-900 my-8">News App</h1>
        
        <div className="flex justify-between items-center mb-6">
          <Navbar categories={categories} setCategory={setCategory} />

          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-1/3"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <p className="col-span-full text-center text-xl">Loading...</p>
          ) : news.length > 0 ? (
            news.map((article) => (
              <Link href={article.url} key={article.url}>
                <NewsCard article={article} />
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-xl">No news found</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-blue-900 text-white rounded-md mx-2 disabled:opacity-50"
            disabled={page === 1}
          >
            Previous
          </button>

          {/* Page Number Buttons */}
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index + 1)}
                className={`px-4 py-2 border rounded-md ${
                  page === index + 1
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-blue-900 text-white rounded-md mx-2"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
};

export default Page;
