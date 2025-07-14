import React from "react";
import Header from "./Header";
import useTrendingGameHook from "../Hooks/useTrendingGameHook";
import useGameListHook from '../Hooks/useGameListHook';
import MainContainer from "./BrowsePage/MainContainer";
import SecondaryContainer from "./BrowsePage/SecondaryContainer";

const Browse = () => {
    useTrendingGameHook();
    useGameListHook();

    return (
        <div className="relative">
            {/* Fixed Header with z-index */}
            <div className="fixed top-0 w-full z-50">
                <Header />
            </div>
            
            {/* Content Container with padding for fixed header */}
            <div className="pt-16"> {/* Adjust this value based on your header height */}
                <div>
                    <MainContainer />
                </div>
                <div className="pt-10">
                    <SecondaryContainer />
                </div>
                
            </div>
        </div>
    );
};

export default Browse;