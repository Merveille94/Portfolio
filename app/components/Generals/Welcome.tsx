"use client"
import React from 'react';
import Link from "next/link";

interface WelcomeProps {
    Heading: string;
    AboutTitle: string;
    AboutSubTitle: string;
    AboutSubSubTitle: string;
    bg:string;
}

const Welcome: React.FC<WelcomeProps> = ({Heading, AboutTitle, AboutSubTitle, AboutSubSubTitle, bg}) => {
    return (
        <section className={`${bg}`}>
          <div className='container mx-auto py-10 relative md:pt-28 pb-10 md:pb-20 overflow-hidden'>
              {/* Faded Background Title - Only Outlines */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-0">
                  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-[6rem] font-bold text-transparent tracking-wider select-none"
                      style={{
                          WebkitTextStroke: '2px rgba(5,5,5,0.3)',
                          // textStroke: '1px rgba(0,0,0,0.1)' as any
                      }}>
                      {/*Welcome*/}
                      {Heading.toUpperCase()}
                  </h1>
              </div>

              <div className="relative z-10 px-4 md:px-6 flex flex-col">
                  {/* ABOUT Title */}
                  {/* About Uppercase */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 md:mb-4">{AboutTitle.toUpperCase()}</h2>

                  {/* Breadcrumb - nav  */}
                  <nav className="text-sm">
                      <ol className="list-reset flex">
                          <li>
                              {/*Home*/}
                              <Link href="/" className="text-gray-600 hover:font-bold">{AboutSubTitle}</Link>
                          </li>
                          <li>
                              <span className="mx-2 text-gray-300">{'>'}</span>
                          </li>
                          {/*About sub Sub-title*/}
                          <li className="text-gray-500">{AboutSubSubTitle}</li>
                      </ol>
                  </nav>
              </div>
          </div>
        </section>
    );
};

export default Welcome;