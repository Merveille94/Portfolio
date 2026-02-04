// import React from 'react';
// import UndergraduateProject from "@/app/components/Publications/UndergraduateProject";
//
// const Page = () => {
//     return (
//         <>
//             <UndergraduateProject/>
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