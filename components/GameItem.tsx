"use client";
import React, { useState } from "react";
import { Games } from "@/data/games";
import { useCart } from "../app/Context/CartContext";

interface GameItemProps {
    game: Games;
}

const GameItem: React.FC<GameItemProps> = ({ game }) => {
    const { id, title, info, img, price } = game;
    const [readMore, setReadMore] = useState(false);
    const { increaseCartQuantity } = useCart();

    return (
        <div className="flex flex-col">
            <img
                className="w-[332px] h-[300px] object-cover rounded-e-xl"
                src={img}
                alt="GameImg"
            />
            <div className="bg-[#626161] w-min-[200px] h-min-[120px] p-3 rounded-ee-2xl">
                <h3 className="text-[18px] dark:text-white text-[#000] text-center pt-2 font-bold text-xl sm:text-2xl">
                    {title}
                </h3>
                <p className="text-[18px] dark:text-[#e5e5e5] text-[#000] text-center max-w-[300px]">
                    {readMore ? info : info.substring(0, 50)}
                    <br />
                    <button
                        onClick={() => setReadMore(!readMore)}
                        className="text-[#ffbf00]"
                    >
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg dark:text-white text-[#000]">{`$${price}`}</span>
                    <button
                        onClick={() => increaseCartQuantity(id)}
                        className="bg-transparent border-2 border-[#ffbf00] py-2 px-4 text-[#ffbf00] font-semibold rounded-tr-2xl"
                    >
                        Buy now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameItem;
