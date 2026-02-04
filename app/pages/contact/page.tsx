// import React from 'react';
// import Contact from "@/app/components/Contacts/Contact";
// import Welcome from "@/app/components/Generals/Welcome";
//
// const Page = () => {
//     return (
//         <>
//             <Welcome Heading="Contact" AboutTitle="Contact" AboutSubTitle="Home" AboutSubSubTitle="Contact" bg="bg-gray-900"/>
//           <Contact/>
//         </>
//     );
// };
//
// export default Page;


import { redirect } from "next/navigation";

export default function Page() {
    redirect("/");
}

export const metadata = {
    robots: {
        index: false,
        follow: false,
    },
};