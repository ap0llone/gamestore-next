"use client";
import Link from "next/link";
import React from "react";
import {
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineGithub,
    AiFillTwitterCircle,
} from "react-icons/ai";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#626161] p-4 mt-20 rounded-3xl">
            <div className="flex flex-col items-center gap-8">
                <div className="flex gap-6">
                    <a href="#!">
                        <AiOutlineInstagram size={30} />
                    </a>
                    <a href="#!">
                        <AiOutlineFacebook size={30} />
                    </a>
                    <a href="#!">
                        <AiOutlineGithub size={30} />
                    </a>
                    <a href="#!">
                        <AiFillTwitterCircle size={30} />
                    </a>
                </div>
                <div className="flex flex-col gap-4 text-center sm:flex-row">
                    <Link
                        className="font-semibold text-white no-underline"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="font-semibold text-white no-underline"
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="font-semibold text-white no-underline"
                        href="/contacts"
                    >
                        Contacts
                    </Link>
                    <Link
                        className="font-semibold text-white no-underline"
                        href="/cart"
                    >
                        Cart
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
