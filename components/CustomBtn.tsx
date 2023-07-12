import Link from "next/link";
import React, { ReactNode } from "react";

interface CustomBtnProps {
    children: ReactNode;
    href: string;
    onClick?: () => void;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ children, href, onClick }) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="bg-[#ffbf00] w-[150px] h-[40px] flex items-center justify-center text-black font-semibold no-underline rounded-tr-2xl"
        >
            {children}
        </Link>
    );
};

export default CustomBtn;
