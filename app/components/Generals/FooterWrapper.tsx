'use client';

import { usePathname } from "next/navigation";
import GeneralFooter from "@/app/components/Generals/GeneralFooter";


export default function FooterWrapper() {
    const pathname = usePathname();

    if (pathname === "/") {
        return null; // Don't show Footer on homepage
    }

    return <GeneralFooter/>;
}
