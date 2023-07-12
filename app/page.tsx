"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { games } from "@/data/games";

import GameItem from "@/components/GameItem";

const Home: React.FC = () => {
    const [loadMore, setLoadMore] = useState(3);

    const loadMoreItems = () => {
        setLoadMore(loadMore + 3);
    };

    return (
        <div className="py-12">
            <Container>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly">
                    <div className="flex flex-col text-center">
                        <h1 className="font-bold mx-auto dark:text-white text-[#000] sm:mb-8 md:text-4xl lg:text-5xl lg:max-w-[450px]">
                            Epic Games Made For True Gamers!
                        </h1>
                        <p className="text-sm max-w-[300px] mx-auto dark:text-white text-[#000]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit sit rerum facilis nulla laboriosam
                            laborum.
                        </p>
                    </div>
                    <img className="w-[250px]" src="chair.png" alt="Chair" />
                </div>
                <div className="py-20">
                    <h3 className="text-center dark:text-white  text-[#000] mb-10 font-semibold text-3xl md:text-5xl">
                        New Arrivals
                    </h3>

                    <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap">
                        {games.slice(0, loadMore).map((game) => {
                            return <GameItem key={game.id} game={game} />;
                        })}
                    </div>
                    <div className="text-center pt-12">
                        <button
                            onClick={loadMoreItems}
                            className={
                                loadMore == games.length
                                    ? "hidden"
                                    : "bg-[#ffbf00] py-2 px-8 text-black font-semibold rounded-tr-2xl"
                            }
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;
