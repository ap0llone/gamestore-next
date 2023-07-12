"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import CustomBtn from "@/components/CustomBtn";

import { useTheme } from "next-themes";
import systemTheme from "next-themes";

const Contacts: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div className="flex flex-col items-center  gap-24 py-12 md:py-20 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 text-center">
                    <h3 className="text-4xl font-semibold md:text-5xl dark:text-white text-[#000]">
                        Let's talk
                    </h3>
                    <p className="dark:text-white text-[#000]">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <span className="flex items-center gap-3 dark:text-white text-[#000]">
                        {currentTheme === "dark" ? (
                            <>
                                <BsFillTelephoneFill fill="white" /> 1 234 567
                                890
                            </>
                        ) : (
                            <>
                                {" "}
                                <BsFillTelephoneFill fill="black" /> 1 234 567
                                890
                            </>
                        )}
                    </span>
                    <span className="flex items-center dark:text-white text-[#000] gap-3">
                        {currentTheme === "dark" ? (
                            <>
                                <AiOutlineMail fill="white" /> hey@gmail.com
                            </>
                        ) : (
                            <>
                                <AiOutlineMail fill="black" /> hey@gmail.com
                            </>
                        )}
                    </span>
                </div>
            </div>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label
                        className="uppercase font-medium mb-1 dark:text-white text-[#000]"
                        htmlFor="name"
                    >
                        name
                    </label>
                    <input
                        className="md:w-[300px] lg:w-[400px] outline-none bg-transparent border-b-2 dark:border-white border-[#000]"
                        type="text"
                        placeholder="John Doe"
                        id="name"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="uppercase font-medium mb-1 dark:text-white text-[#000]"
                        htmlFor="email"
                    >
                        email
                    </label>
                    <input
                        className="md:w-[300px] lg:w-[400px] outline-none bg-transparent border-b-2 dark:border-white border-[#000]"
                        type="text"
                        placeholder="example@gmail.com"
                        id="email"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="uppercase font-medium mb-1 dark:text-white text-[#000]"
                        htmlFor="msg"
                    >
                        message
                    </label>
                    <textarea
                        className="md:w-[300px] lg:w-[400px] outline-none resize-none bg-transparent border-b-2 dark:border-white border-[#000]"
                        placeholder="Hi there!"
                        id="msg"
                    />
                </div>
                <CustomBtn href="#">send</CustomBtn>
            </form>
        </div>
    );
};

export default Contacts;
