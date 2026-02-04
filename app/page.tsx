// import React from 'react';
// import Hero from "@/app/components/Hero/Hero";
// import SocialSidebar from "@/app/components/Hero/SocialSidebar";
// import SocialFooter from "@/app/components/Hero/SocialFooter";
//
//
// const Page = () => {
//     return (
//         <div>
//             <Hero/>
//             <SocialSidebar/>
//             <SocialFooter/>
//         </div>
//     );
// };
// export default Page;
// Above is the original code

import React from "react";
import Hero from "@/app/components/Hero/Hero";
import SocialSidebar from "@/app/components/Hero/SocialSidebar";
import SocialFooter from "@/app/components/Hero/SocialFooter";

const MAINTENANCE_MODE = true; // change this to false, if you are ready to return live

const Page = () => {
    if (MAINTENANCE_MODE) {
        return (
            <main
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "2rem",
                }}
            >
                <div>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                        🚧 I’ll be back soon, just doing some maintenance... .
                    </h1>
                    <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
                        Hello Emanuele Merveille here 😁!!! This website is temporarily offline for maintenance.
                        <br />
                        I am working on some improvements and will be back soon. <br/> find me on linkedin:
                        <a
                            href="https://www.linkedin.com/in/emanuelemerveille/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="text-md text-red-700 font-bold"> emanuelemerveille</i>
                        </a>

                    </p>
                </div>
            </main>
        );
    }

    return (
        <div>
            <Hero />
            <SocialSidebar />
            <SocialFooter />
        </div>
    );
};

export default Page;
