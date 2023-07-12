"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

import { useCart } from "../app/Context/CartContext";
import { useTheme } from "next-themes";
import systemTheme from "next-themes";

const Navbar: React.FC = () => {
    const [navActive, setNavActive] = useState(false);
    const { cartQuantity, cartItems } = useCart();
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);

    window.addEventListener("scroll", () => {
        setNavActive(false);
    });

    window.addEventListener("click", () => {
        setNavActive(false);
    });

    return (
        <nav onClick={(e) => e.stopPropagation()} className="py-3">
            <div className="flex items-center justify-between">
                <Link
                    className="text-white no-underline uppercase font-bold text-2xl"
                    href="/"
                >
                    <Image src="logo.svg" width={60} height={60} alt="Logo" />
                </Link>
                <div
                    className={
                        navActive
                            ? "fixed top-0 bottom-0 right-0 left-0 bg-[#ffbf00] w-[80%] rounded-e-2xl flex flex-col gap-2 items-center justify-center text-xl"
                            : "hidden md:flex md:gap-8"
                    }
                >
                    <Link
                        onClick={() => setNavActive(false)}
                        className={
                            navActive
                                ? "text-black no-underline font-semibold uppercase"
                                : `dark:text-white text-[#000] no-underline font-medium uppercase`
                        }
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        onClick={() => setNavActive(false)}
                        className={
                            navActive
                                ? "text-black no-underline font-semibold uppercase"
                                : "dark:text-white text-[#000] no-underline font-medium uppercase"
                        }
                        href="/about"
                    >
                        about
                    </Link>
                    <Link
                        onClick={() => setNavActive(false)}
                        className={
                            navActive
                                ? "text-black no-underline font-semibold uppercase"
                                : "dark:text-white text-[#000] no-underline font-medium uppercase"
                        }
                        href="/contacts"
                    >
                        contacts
                    </Link>
                </div>
                <div className="flex gap-3">
                    <Link className="relative" href="/cart">
                        {currentTheme === "dark" ? (
                            <AiOutlineShoppingCart fill="white" size={30} />
                        ) : (
                            <AiOutlineShoppingCart fill="black" size={30} />
                        )}
                        {cartItems.length > 0 && (
                            <div className="absolute right-[-8px] bottom-[-10px] bg-[#ffbf00] rounded-full w-5 h-5 font-semibold">
                                <span className="flex items-center justify-center text-black text-sm text-center">
                                    {cartQuantity}
                                </span>
                            </div>
                        )}
                    </Link>
                    {currentTheme === "dark" ? (
                        <button
                            onClick={() => setTheme("light")}
                            className="bg-transparent border-2 border-[#ffbf00] p-1 rounded-full"
                        >
                            <Image
                                src="/sun.svg"
                                width={25}
                                height={25}
                                alt="ModeToggle"
                            />
                        </button>
                    ) : (
                        <button
                            onClick={() => setTheme("dark")}
                            className="bg-transparent border-2 border-[#ffbf00] p-1 rounded-full"
                        >
                            <Image
                                src="/moon.svg"
                                width={25}
                                height={25}
                                alt="ModeToggle"
                            />
                        </button>
                    )}
                    <button
                        onClick={() => setNavActive(!navActive)}
                        className="md:hidden dark:text-white"
                    >
                        {navActive ? (
                            <>
                                {currentTheme === "dark" ? (
                                    <IoMdClose fill="white" size={30} />
                                ) : (
                                    <IoMdClose fill="black" size={30} />
                                )}
                            </>
                        ) : (
                            <>
                                {currentTheme === "light" ? (
                                    <AiOutlineMenu fill="black" size={30} />
                                ) : (
                                    <AiOutlineMenu fill="white" size={30} />
                                )}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
