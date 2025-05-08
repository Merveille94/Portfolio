"use client"
import React, { useState} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight, FaHeart, FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdComment } from "react-icons/md";

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
    // State management
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
    const [comments, setComments] = useState<Record<number, Comment[]>>({});
    const [commentInput, setCommentInput] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [likes, setLikes] = useState<Record<number, boolean>>({});

    const postsPerPage = 6;

    // Sample news articles data
    const newsArticles: NewsArticle[] = [
        {
            id: 1,
            title: "Launched New Machine Learning Algorithm",
            excerpt: "Developed a novel approach to image classification that improves accuracy by 15% over existing methods.",
            content: `Recently, I developed a new machine learning algorithm that significantly improves image classification accuracy. This breakthrough came after months of research and experimentation with various neural network architectures.

The algorithm utilizes a hybrid approach combining convolutional neural networks with transformer mechanisms, allowing it to better understand spatial relationships while maintaining context awareness. Testing against benchmark datasets showed a consistent 15% improvement over state-of-the-art methods.

One of the most exciting aspects of this development is its efficiency - the model requires 30% less computational resources than comparable solutions, making it viable for deployment on edge devices with limited processing power.

The implications for real-world applications are substantial, from improving medical image diagnostics to enhancing computer vision systems in autonomous vehicles. The code has been released as an open-source project to encourage further development and adoption by the broader community.

Next steps include refining the algorithm to work with video data and exploring potential applications in augmented reality systems. This project represents a significant step forward in making sophisticated machine learning more accessible and efficient.`,
            image: "/api/placeholder/600/400",
            date: "April 15, 2025",
            author: "Your Name",
            category: "Machine Learning"
        },
        {
            id: 2,
            title: "Completed Full-Stack E-commerce Project",
            excerpt: "Built a scalable e-commerce platform using React, Node.js, and MongoDB with secure payment processing.",
            content: `I recently completed a comprehensive full-stack e-commerce platform built with modern web technologies. The project was undertaken to create a scalable, secure, and user-friendly online shopping experience.

The frontend was developed using React with Redux for state management, featuring responsive design principles to ensure a seamless experience across all devices. For styling, I implemented Tailwind CSS, which allowed for rapid development without sacrificing customization options.

On the backend, I used Node.js with Express to create a RESTful API that communicates with a MongoDB database. The architecture follows a microservices approach, with separate services handling authentication, product management, order processing, and payment integration.

Security was a primary concern throughout development. The platform implements JWT for authentication, data encryption for sensitive information, and follows OWASP security best practices. Payment processing was integrated using Stripe's API with proper error handling and transaction verification.

Performance optimizations include code splitting, lazy loading of components, image compression, and caching strategies that significantly reduce loading times. The application was containerized using Docker for consistent deployment across different environments.

The project taught me valuable lessons about handling complex state management, designing scalable database schemas, and implementing secure payment flows. The codebase is well-documented and follows clean code principles to facilitate future maintenance and feature additions.`,
            image: "/api/placeholder/600/400",
            date: "March 22, 2025",
            author: "Your Name",
            category: "Web Development"
        },
        {
            id: 3,
            title: "Optimized Database Performance for Legacy System",
            excerpt: "Improved query response time by 80% through database restructuring and optimization techniques.",
            content: `I recently completed a major database optimization project for a legacy system that was experiencing significant performance issues. The system, which had been in operation for over a decade, had accumulated inefficiencies that were causing slow query response times and affecting user experience.

The optimization process began with a comprehensive analysis of the existing database structure and query patterns. Using profiling tools, I identified several bottlenecks including unindexed columns in frequently queried tables, poorly designed table relationships, and suboptimal query construction.

The solution involved a multi-faceted approach. First, I implemented strategic indexing based on query analysis, which immediately improved the most problematic queries. Next, I restructured several key tables to normalize data where appropriate and denormalize in cases where join operations were creating performance issues.

Query optimization was another critical component. I rewrote several stored procedures to eliminate unnecessary table scans and reduce the complexity of joins. In some cases, I implemented materialized views to cache frequently accessed but rarely changing data.

The results were dramatic: average query response time improved by 80%, system resource utilization decreased by 40%, and user-reported system slowdowns dropped to near zero. The optimizations were implemented with minimal downtime and without requiring changes to the application layer.

This project reinforced the importance of regular database maintenance and the significant impact that well-executed optimization can have on overall system performance. The documentation I created will help the maintenance team continue monitoring and optimizing as the system evolves.`,
            image: "/api/placeholder/600/400",
            date: "February 18, 2025",
            author: "Your Name",
            category: "Database"
        },
        {
            id: 4,
            title: "Presented Research at International Tech Conference",
            excerpt: "Shared findings on sustainable computing practices and received recognition for innovative approaches.",
            content: `Last month, I had the honor of presenting my research on sustainable computing practices at the International Conference on Green Technology. The presentation focused on novel methods for reducing energy consumption in cloud computing environments without compromising on performance.

My research proposed a dynamic resource allocation framework that uses machine learning to predict workload patterns and adjust computing resources accordingly. The system continuously monitors various metrics including CPU usage, memory consumption, and network traffic to make intelligent decisions about scaling resources up or down.

The presentation included real-world test results from a six-month implementation period, during which energy consumption was reduced by 42% compared to traditional fixed-resource allocation methods. These results generated significant interest from both academic researchers and industry professionals in attendance.

A highlight of the conference was the panel discussion on future directions in green computing, where I was invited to join leading experts in the field. The conversation explored emerging technologies like quantum computing and their potential impact on energy consumption in the computing sector.

The conference provided valuable networking opportunities with researchers working on complementary technologies. Several collaborative projects are now being discussed, which could lead to even more effective sustainable computing solutions.

The research paper associated with this presentation will be published in the upcoming issue of the Journal of Sustainable Computing Technologies. I'm currently working on extending this research to include edge computing environments, which present unique challenges and opportunities for energy optimization.`,
            image: "/api/placeholder/600/400",
            date: "January 30, 2025",
            author: "Your Name",
            category: "Research"
        },
        {
            id: 5,
            title: "Developed Open-Source Library for Data Visualization",
            excerpt: "Created a Python library that simplifies complex data visualization with an intuitive API.",
            content: `I'm excited to announce the release of DataVizSimple, an open-source Python library I've developed that makes creating complex data visualizations straightforward and accessible. The project stemmed from my own frustrations with the steep learning curve of existing visualization libraries.

DataVizSimple provides an intuitive API that allows users to create sophisticated visualizations with minimal code. The library abstracts away much of the complexity while still offering customization options for advanced users. It builds upon matplotlib and seaborn but provides higher-level functions that make common visualization tasks more accessible.

Key features include:
- One-line functions for common charts like correlation matrices, distribution comparisons, and time series analysis
- Automatic handling of missing data and outliers
- Built-in themes for consistent and professional-looking visualizations
- Interactive elements that work both in Jupyter notebooks and web applications
- Comprehensive documentation with examples and tutorials

The library has already gained traction in the data science community, with over 500 GitHub stars in the first week after release. Several data scientists and educators have contributed feedback and pull requests to enhance functionality.

Development of DataVizSimple taught me valuable lessons about API design, documentation standards, and managing an open-source project. I've implemented a robust testing framework to ensure reliability and created a roadmap for future development based on community feedback.

Future plans include adding more specialized visualization types for specific fields like genomics and finance, improving export options for various formats, and creating integrations with popular data analysis frameworks.`,
            image: "/api/placeholder/600/400",
            date: "December 12, 2024",
            author: "Your Name",
            category: "Open Source"
        },
        {
            id: 6,
            title: "Implemented CI/CD Pipeline for Critical Production Service",
            excerpt: "Automated deployment process reduced deployment time by 90% and eliminated deployment-related outages.",
            content: `I recently completed a major DevOps initiative to implement a comprehensive CI/CD pipeline for our organization's most critical production service. Previously, the deployment process was largely manual, time-consuming, and prone to human error, occasionally resulting in service disruptions.

The new pipeline utilizes GitHub Actions for continuous integration, running automated tests on every pull request and merge to the main branch. The system verifies code quality through static analysis tools and ensures test coverage remains above our established threshold of 85%.

For continuous deployment, I implemented a multi-stage process using Terraform for infrastructure as code and Kubernetes for container orchestration. Each deployment progresses through development, staging, and production environments, with automated smoke tests and a series of validation checks at each stage.

A key innovation in the pipeline is the implementation of canary deployments, where new versions are gradually rolled out to a small percentage of users before being deployed fleet-wide. This approach, combined with automated rollback mechanisms triggered by predefined error thresholds, has effectively eliminated deployment-related outages.

The results have been transformative for the development team:
- Deployment time reduced from 3 hours to under 15 minutes (90% reduction)
- Zero deployment-related outages since implementation (down from an average of one per month)
- Developer confidence in the deployment process increased significantly
- Release frequency increased from bi-weekly to on-demand, enabling faster feature delivery

The success of this project has led to plans for implementing similar pipelines across all our production services. I've created comprehensive documentation and conducted knowledge-sharing sessions to ensure the rest of the team can maintain and extend the pipeline as needed.`,
            image: "/api/placeholder/600/400",
            date: "November 5, 2024",
            author: "Your Name",
            category: "DevOps"
        },
        {
            id: 7,
            title: "Designed New Algorithm for Network Traffic Optimization",
            excerpt: "Created a novel approach that reduces network congestion by intelligently routing data packets.",
            content: `I recently completed work on a new algorithm designed to optimize network traffic in congested environments. The algorithm, which I've named PathSense, uses a combination of machine learning and graph theory to dynamically route data packets through the most efficient paths.

The development process began with an analysis of existing traffic optimization methods and their limitations in high-load situations. Traditional algorithms often make routing decisions based on static metrics or instantaneous conditions, which can lead to oscillation and suboptimal throughput when network conditions change rapidly.

PathSense takes a different approach by maintaining a continuously updated model of network behavior and using predictive analytics to anticipate congestion before it occurs. The algorithm considers factors such as historical performance patterns, current traffic loads, and even time-of-day variations to make optimal routing decisions.

Implementation involved creating a simulation environment to test various approaches under different network conditions. After numerous iterations and refinements, the final algorithm demonstrated impressive results:
- 30% reduction in average packet latency
- 25% improvement in overall network throughput
- 45% decrease in packet loss during peak usage periods
- Significant improvement in performance stability under variable conditions

A particularly interesting finding was that PathSense performed exceptionally well in scenarios with unexpected traffic spikes, adapting much more quickly than conventional algorithms. This makes it especially suitable for networks with unpredictable usage patterns.

The algorithm has been implemented as a module for popular network management systems and will be released with an open-source license next month. I'm currently working on a research paper detailing the technical approach and results for submission to the International Conference on Network Optimization.`,
            image: "/api/placeholder/600/400",
            date: "October 20, 2024",
            author: "Your Name",
            category: "Networking"
        },
        {
            id: 8,
            title: "Launched Mobile App for Environmental Monitoring",
            excerpt: "Developed a cross-platform application that enables citizens to contribute to environmental data collection.",
            content: `I'm excited to announce the launch of EcoWatch, a mobile application I developed that enables citizen scientists to contribute to environmental monitoring and research. The app, available on both iOS and Android platforms, was created to address the growing need for widespread, granular environmental data collection.

EcoWatch allows users to record observations about local environmental conditions including air quality, water clarity, wildlife sightings, and plant health. The application uses the device's GPS to precisely locate each observation and includes functionality for adding photos, notes, and specific measurements when appropriate equipment is available.

From a technical perspective, the app was built using React Native to ensure consistency across platforms while maintaining native performance. Backend services are hosted on AWS, with a serverless architecture that automatically scales based on user activity levels. Data is stored in a combination of DynamoDB for rapid access and S3 for media storage.

A key focus during development was creating an intuitive user experience that would encourage regular participation. The interface was designed with input from environmental scientists and user experience professionals, and went through several rounds of testing with potential users to refine the workflow.

The data collected through EcoWatch is anonymized and made available to environmental researchers through an API and web dashboard. Several university research programs have already integrated EcoWatch data into their studies, particularly those focused on urban ecology and climate change impacts.

Since its soft launch last month, the app has gained over 5,000 active users who have contributed more than 20,000 environmental observations. Future plans include adding integration with affordable sensor hardware to allow for more precise measurements and implementing machine learning for automated identification of plant and animal species from user photos.`,
            image: "/api/placeholder/600/400",
            date: "September 15, 2024",
            author: "Your Name",
            category: "Mobile Development"
        },
        {
            id: 9,
            title: "Created Virtual Reality Training Program for Medical Students",
            excerpt: "Developed an immersive VR simulation that allows medical students to practice surgical procedures in a realistic environment.",
            content: `I recently completed development of MedicalVR, a virtual reality training program designed to provide medical students with immersive, risk-free surgical training experiences. The project represents the culmination of two years of collaboration with medical educators and practicing surgeons.

MedicalVR offers highly detailed simulations of common surgical procedures, with a particular focus on orthopedic and cardiovascular surgeries. Users interact with anatomically accurate 3D models using VR controllers that provide haptic feedback calibrated to mimic the resistance of different tissue types. The system tracks hand movements with millimeter precision, allowing for detailed assessment of technique and precision.

From a technical standpoint, the application was developed using Unity for the core simulation engine, with custom C# scripts handling the specialized physics and interaction models. Anatomical models were created in collaboration with medical imaging specialists to ensure accuracy, using a combination of procedurally generated elements and manually sculpted details.

One of the most challenging aspects was creating realistic tissue behavior under different conditions and with various surgical tools. I developed a custom material system that simulates the physical properties of different biological tissues, including elasticity, tensile strength, and response to cutting or suturing.

The program includes a comprehensive assessment system that evaluates students on metrics such as precision, efficiency, and adherence to proper technique. Instructors can review detailed playbacks of each session, allowing for specific feedback on areas for improvement.

Initial testing with medical students at three university teaching hospitals has shown promising results:
- 87% of students reported increased confidence in their understanding of surgical procedures
- Objective skill assessments showed improvement 35% faster than with traditional training methods
- Instructors noted particular benefits for students who previously struggled with spatial reasoning aspects of surgical procedures

The next phase of development will focus on expanding the library of procedures and implementing a networked mode that allows an instructor to join the simulation remotely to provide real-time guidance and instruction.`,
            image: "/api/placeholder/600/400",
            date: "August 3, 2024",
            author: "Your Name",
            category: "Virtual Reality"
        }
    ];

    // Calculate total pages
    const totalPages = Math.ceil(newsArticles.length / postsPerPage);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = newsArticles.slice(indexOfFirstPost, indexOfLastPost);

    // Handle page change
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    // Handle selecting an article to view in detail
    const viewArticle = (article: NewsArticle) => {
        setSelectedArticle(article);
        window.scrollTo(0, 0);
    };

    // Handle going back to the grid view
    const backToGrid = () => {
        setSelectedArticle(null);
    };

    // Handle liking an article
    const toggleLike = (articleId: number) => {
        setLikes(prevLikes => ({
            ...prevLikes,
            [articleId]: !prevLikes[articleId]
        }));
    };

    // Handle submitting a comment
    const submitComment = (articleId: number) => {
        if (commentInput.trim() && userName.trim()) {
            const newComment: Comment = {
                id: Date.now(),
                name: userName,
                text: commentInput,
                date: new Date().toLocaleDateString()
            };

            setComments(prevComments => ({
                ...prevComments,
                [articleId]: [...(prevComments[articleId] || []), newComment]
            }));

            setCommentInput("");
        }
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
            <AnimatePresence mode="wait">
                {selectedArticle ? (
                    // Article Detail View
                    <motion.div
                        key="article-detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Back button */}
                        <motion.button
                            onClick={backToGrid}
                            className="flex items-center space-x-2 text-blue-600 mb-8"
                            whileHover={{ x: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaChevronLeft />
                            <span>Back to All News</span>
                        </motion.button>

                        {/* Article header */}
                        <motion.h1
                            className="text-3xl font-bold text-gray-800 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {selectedArticle.title}
                        </motion.h1>

                        <motion.div
                            className="flex items-center space-x-6 text-gray-500 text-sm mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.2 } }}
                        >
                            <div className="flex items-center space-x-2">
                                <FaCalendarAlt size={14} />
                                <span>{selectedArticle.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaUser size={14} />
                                <span>{selectedArticle.author}</span>
                            </div>
                            <div className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                {selectedArticle.category}
                            </div>
                        </motion.div>

                        {/* Featured image */}
                        <motion.div
                            className="mb-8 relative h-96"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                        >
                            <Image
                                src={selectedArticle.image}
                                alt={selectedArticle.title}
                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </motion.div>

                        {/* Article content */}
                        <motion.div
                            className="prose prose-lg max-w-none mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.4 } }}
                        >
                            {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>

                        {/* Actions */}
                        <motion.div
                            className="flex items-center space-x-4 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.5 } }}
                        >
                            <button
                                onClick={() => toggleLike(selectedArticle.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                                    likes[selectedArticle.id]
                                        ? 'bg-red-50 text-red-500'
                                        : 'bg-gray-50 text-gray-500'
                                }`}
                            >
                                {likes[selectedArticle.id] ? (
                                    <FaHeart className="text-red-500" />
                                ) : (
                                    <FaRegHeart />
                                )}
                                <span>{likes[selectedArticle.id] ? 'Liked' : 'Like'}</span>
                            </button>

                            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full text-gray-500">
                                <MdComment />
                                <span>
                                    {comments[selectedArticle.id]?.length || 0} Comment{(comments[selectedArticle.id]?.length || 0) !== 1 ? 's' : ''}
                                </span>
                            </div>
                        </motion.div>

                        {/* Comments section */}
                        <motion.div
                            className="mt-12 border-t border-gray-100 pt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.6 } }}
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">Comments</h3>

                            {/* Existing comments */}
                            <div className="space-y-6 mb-8">
                                {comments[selectedArticle.id]?.length > 0 ? (
                                    comments[selectedArticle.id].map(comment => (
                                        <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-gray-800">{comment.name}</span>
                                                <span className="text-gray-500 text-sm">{comment.date}</span>
                                            </div>
                                            <p className="text-gray-600">{comment.text}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
                                )}
                            </div>

                            {/* Comment form */}
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="text-lg font-medium text-gray-800 mb-4">Leave a Comment</h4>

                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="comment" className="block text-gray-700 mb-2">
                                        Your Comment
                                    </label>
                                    <textarea
                                        id="comment"
                                        rows={4}
                                        value={commentInput}
                                        onChange={(e) => setCommentInput(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Write your comment here..."
                                    />
                                </div>

                                <motion.button
                                    onClick={() => submitComment(selectedArticle.id)}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Post Comment
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : (
                    // News Grid View
                    <motion.div
                        key="news-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.h1
                            className="text-4xl font-bold text-gray-800 mb-8 text-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Latest News & Updates
                        </motion.h1>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {currentPosts.map((article) => (
                                <motion.div
                                    key={article.id}
                                    variants={item}
                                    whileHover={{ y: -5 }}
                                    className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="h-48 relative overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                                                {article.category}
                                            </span>
                                            <span className="text-gray-500 text-sm">{article.date}</span>
                                        </div>

                                        <h2 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                                            {article.title}
                                        </h2>

                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500 text-sm">By {article.author}</span>

                                            <motion.button
                                                onClick={() => viewArticle(article)}
                                                whileHover={{ x: 3 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="text-blue-600 font-medium flex items-center space-x-1 text-sm"
                                            >
                                                <span>Read More</span>
                                                <FaArrowRight size={12} />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <motion.div
                                className="flex justify-center mt-12 space-x-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                            >
                                <button
                                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                                    disabled={currentPage === 1}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                        currentPage === 1
                                            ? 'text-gray-400 cursor-not-allowed'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <FaChevronLeft size={14} />
                                </button>

                                {[...Array(totalPages)].map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => paginate(idx + 1)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                            currentPage === idx + 1
                                                ? 'bg-blue-600 text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}

                                <button
                                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                                    disabled={currentPage === totalPages}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                        currentPage === totalPages
                                            ? 'text-gray-400 cursor-not-allowed'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <FaChevronRight size={14} />
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NewsPage;