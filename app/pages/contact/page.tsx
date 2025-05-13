import React from 'react';
import Contact from "@/app/components/Contacts/Contact";
import Welcome from "@/app/components/Generals/Welcome";

const Page = () => {
    return (
        <>
            <Welcome Heading="Contact" AboutTitle="Contact" AboutSubTitle="Home" AboutSubSubTitle="Contact" bg="bg-gray-900"/>
          <Contact/>
        </>
    );
};

export default Page;