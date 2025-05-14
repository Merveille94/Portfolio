"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaCalendarAlt,
    FaUser,
    FaArrowRight,
    FaHeart,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import { MdComment } from "react-icons/md";

// Import newsArticles from the data file
import { newsArticles } from "@/app/data/NewsData";

// Define TypeScript interfaces
interface NewsArticle {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    author: string;
    category: string;
}

interface Comment {
    id: number;
    name: string;
    text: string;
    date: string;
}

const NewsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
        null
    );
    const [comments, setComments] = useState<Record<number, Comment[]>>({});
    const [commentInput, setCommentInput] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [likes, setLikes] = useState<Record<number, boolean>>({});

    const postsPerPage = 6;

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newsArticles.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(newsArticles.length / postsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleLike = (id: number) => {
        setLikes((prevLikes) => ({ ...prevLikes, [id]: !prevLikes[id] }));
    };

    const handleAddComment = (articleId: number) => {
        if (!commentInput || !userName) return;

        const newComment: Comment = {
            id: Date.now(),
            name: userName,
            text: commentInput,
            date: new Date().toLocaleDateString(),
        };

        setComments((prevComments) => ({
            ...prevComments,
            [articleId]: [...(prevComments[articleId] || []), newComment],
        }));

        setCommentInput("");
        setUserName("");
    };

    return (
        <section className="bg-gray-900">
            <div className="p-6 max-w-6xl mx-auto text-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-600 pb-2">
                    Latest News
                </h1>

                {!selectedArticle ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentPosts.map((article) => (
                                <motion.div
                                    key={article.id}
                                    layout
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <span className="text-xs font-semibold text-blue-400 px-2 py-1 rounded bg-gray-900 bg-opacity-70">
                      {article.category}
                    </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold mb-2 text-blue-300">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-300 mb-3 text-sm">{article.excerpt}</p>
                                        <div className="flex items-center text-sm text-gray-400 space-x-4 mb-4">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1 text-blue-400" />
                        {article.date}
                    </span>
                                            <span className="flex items-center">
                      <FaUser className="mr-1 text-blue-400" />
                                                {article.author}
                    </span>
                                        </div>
                                        <button
                                            onClick={() => setSelectedArticle(article)}
                                            className="text-blue-400 hover:text-blue-300 flex items-center transition-colors group"
                                        >
                                            Read more{" "}
                                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-8 space-x-2">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50 hover:bg-blue-700 transition-colors"
                            >
                                <FaChevronLeft />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => paginate(i + 1)}
                                    className={`px-3 py-1 rounded transition-colors ${
                                        currentPage === i + 1
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-800 hover:bg-gray-700"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50 hover:bg-blue-700 transition-colors"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </>
                ) : (
                    <AnimatePresence>
                        <motion.div
                            key={selectedArticle.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="bg-gray-800 p-6 rounded-lg shadow-xl"
                        >
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="text-blue-400 hover:text-blue-300 mb-4 flex items-center group transition-colors"
                            >
                                <FaChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
                                Back to News
                            </button>
                            <div className="relative">
                                <Image
                                    src={selectedArticle.image}
                                    alt={selectedArticle.title}
                                    width={800}
                                    height={500}
                                    className="w-full h-64 md:h-80 object-cover rounded mb-4"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                    {selectedArticle.category}
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-300">
                                {selectedArticle.title}
                            </h2>
                            <div className="flex items-center text-sm text-gray-400 space-x-4 mb-6 border-b border-gray-700 pb-4">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1 text-blue-400" />
                  {selectedArticle.date}
              </span>
                                <span className="flex items-center">
                <FaUser className="mr-1 text-blue-400" />
                                    {selectedArticle.author}
              </span>
                                <span className="flex items-center cursor-pointer" onClick={() => handleLike(selectedArticle.id)}>
                <FaHeart
                    className={`${
                        likes[selectedArticle.id] ? "text-red-500" : "text-gray-500"
                    } hover:text-red-500 transition-colors`}
                />
                <span className="ml-1">
                  {likes[selectedArticle.id] ? "1" : "0"}
                </span>
              </span>
                            </div>
                            <p className="mb-6 whitespace-pre-line text-gray-300 leading-relaxed">
                                {selectedArticle.content}
                            </p>

                            <div className="mt-8 bg-gray-900 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-300">
                                    <MdComment className="mr-2 text-blue-400" />
                                    Comments
                                </h3>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="border border-gray-700 p-2 w-full mb-2 rounded bg-gray-800 text-gray-100 focus:border-blue-500 focus:outline-none"
                                    />
                                    <textarea
                                        placeholder="Write a comment..."
                                        value={commentInput}
                                        onChange={(e) => setCommentInput(e.target.value)}
                                        className="border border-gray-700 p-2 w-full rounded bg-gray-800 text-gray-100 focus:border-blue-500 focus:outline-none"
                                        rows={4}
                                    />
                                    <button
                                        onClick={() => handleAddComment(selectedArticle.id)}
                                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                    >
                                        Post Comment
                                    </button>
                                </div>
                                <div>
                                    {(comments[selectedArticle.id] || []).length > 0 ? (
                                        (comments[selectedArticle.id] || []).map((comment) => (
                                            <div
                                                key={comment.id}
                                                className="border-t border-gray-700 py-3 text-sm"
                                            >
                                                <p className="font-semibold text-blue-300">{comment.name}</p>
                                                <p className="text-gray-300 mt-1">{comment.text}</p>
                                                <p className="text-gray-500 text-xs mt-1">{comment.date}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </section>
    );
};

export default NewsPage;