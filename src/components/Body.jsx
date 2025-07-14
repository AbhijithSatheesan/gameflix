import React from 'react'
import Login from './Login'
import Header from './Header'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoutes'
import CategoryPage from './BrowsePage/CategoryPage'


const Body = () =>{

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: (
                <PublicRoute>
                    <Login/>
                </PublicRoute>
            )
        },
        {
            path: 'browse',
            element: (
                <ProtectedRoute>
                    <Browse/>
                </ProtectedRoute>
            )
        },
        {
            path: 'category/:category',
            element: (
                <ProtectedRoute>
                    <CategoryPage/>
                </ProtectedRoute>
            )
        },
    ])

    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
};

export default Body