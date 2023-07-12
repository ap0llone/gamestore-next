import React from "react";
import Link from "next/link";
import CustomBtn from "@/components/CustomBtn";

const About: React.FC = () => {
    return (
        <div className="py-12">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between ">
                <img
                    className="w-[500px] lg:h-[500px] object-cover rounded-tr-2xl"
                    src="https://live.staticflickr.com/8847/17396933596_0776d4d830_b.jpg"
                    alt="AboutImg"
                />
                <div className="flex flex-col gap-3 items-center">
                    <h5 className="uppercase font-semibold dark:text-white text-[#000]">
                        about us
                    </h5>
                    <h2 className="text-4xl text-medium md:text-5xl dark:text-white text-[#000]">
                        Our Stores
                    </h2>
                    <p className="text-center dark:text-white text-[#000]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ut officia quidem magnam expedita! Culpa laborum
                        nostrum beatae minus dolorem consequuntur molestias
                        dicta iste illo iusto nobis repudiandae assumenda, eum
                        recusandae inventore ut nesciunt eveniet consequatur
                        alias distinctio aspernatur velit. Excepturi magnam,
                        porro sunt minus architecto quam voluptate optio saepe
                        suscipit.
                    </p>
                    <CustomBtn href="/contacts">Learn more</CustomBtn>
                </div>
            </div>
        </div>
    );
};

export default About;
