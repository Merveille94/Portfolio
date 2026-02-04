// import React from 'react';
// import Education from "@/app/Education/Education";
//
// const Page = () => {
//     return (
//         <>
//             <Education/>
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