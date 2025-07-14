import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import GameCard from './GameCard';

const CategoryPage = () => {
    const { state } = useLocation();
    const { category } = useParams();
    const { games, title } = state || {};

    return (
        <div className="bg-gray-900 min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        {title || `${category} Games`}
                    </h1>
                    <p className="text-gray-400">
                        Showing {games?.length || 0} games
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {games?.map(game => (
                        <GameCard 
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            coverImagePath={game.cover_image}
                            rating={game.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;