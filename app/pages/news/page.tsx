import React from 'react';
import NewsPage from "@/app/components/News/NewsPage";
import Welcome from "@/app/components/Generals/Welcome";

const Page = () => {
    return (
        <>
            <Welcome Heading="Latest News" AboutTitle="News" AboutSubTitle="Home" AboutSubSubTitle="News" bg="bg-gray-900"/>
            <NewsPage/>
        </>
    );
};

export default Page;