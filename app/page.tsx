import React from 'react';
import Hero from "@/app/components/Hero/Hero";
import SocialSidebar from "@/app/components/Hero/SocialSidebar";
import SocialFooter from "@/app/components/Hero/SocialFooter";


const Page = () => {
    return (
        <div>
            <Hero/>
            <SocialSidebar/>
            <SocialFooter/>
        </div>
    );
};
export default Page;