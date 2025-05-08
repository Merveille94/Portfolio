import React from 'react';
import PublicationsPage from "@/app/components/Publications/PublicationsPage";
import Welcome from "@/app/components/Generals/Welcome";

const Page = () => {
    return (
        <>
            <Welcome Heading ="Publication" AboutTitle="Publications" AboutSubTitle="Home" AboutSubSubTitle="Publications"/>
            <PublicationsPage/>
        </>
    );
};

export default Page;