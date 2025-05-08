import React from 'react';
import About from "@/app/components/About/About";
import Welcome from "@/app/components/Generals/Welcome";

const Page = () => {
    return (
        <>
            <Welcome Heading ="Welcome" AboutTitle="About" AboutSubTitle="Home" AboutSubSubTitle="About"/>
            <About/>
        </>
    );
};

export default Page;