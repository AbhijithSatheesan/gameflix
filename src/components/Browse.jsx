import React from "react";
import Header from "./Header";
import useTrendingGameHook from "../Hooks/useTrendingGameHook";
import VideoPlayer from "./VideoPlayer";
import MainContainer from "./BrowsePage/MainContainer";
import SecondaryContainer from "./BrowsePage/SecondaryContainer";

const Browse = () => {
    useTrendingGameHook();

    return (
        <div>
            <Header />
            
            {/* Spacer to push content below fixed header */}
            <div className="py-4" />

            <MainContainer />
            <SecondaryContainer />
            
            <h1 className="text-blue-500">Browse Component</h1>
        </div>
    );
};

export default Browse;
