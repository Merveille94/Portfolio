// import React from 'react';
// import PublicationsPage from "@/app/components/Publications/PublicationsPage";
// import Welcome from "@/app/components/Generals/Welcome";
//
// const Page = () => {
//     return (
//         <>
//             <Welcome Heading ="Publication" AboutTitle="Publications" AboutSubTitle="Home" AboutSubSubTitle="Publications" bg="bg-gray-900"/>
//             <PublicationsPage/>
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