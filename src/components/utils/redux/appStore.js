import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import userReducer from "./userSlice";
import browsePageReducer from './browsePageSlice';
import gameListReducer from './gameListSlice'

// Persist configuration
const userPersistConfig = {
    key: "user", // Key for localStorage
    storage, // Use localStorage
};

const gameListPersistConfig = {
    key: "game_list",
    storage,
};


// Create a persisted reducer for the persisted slices
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedGameListReducer = persistReducer(gameListPersistConfig, gameListReducer);



// Configure the store
const appstore = configureStore({
    reducer: {
        user: persistedUserReducer, // Use the persisted reducer
        browsePage: browsePageReducer,
        gameList: persistedGameListReducer, // Persisted game list reducer
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required for redux-persist
        }),
});

// Create a persistor
export const persistor = persistStore(appstore);

export default appstore;























// import { configureStore } from "@reduxjs/toolkit";
// import  userReducer   from './userSlice';


// const appstore = configureStore({
//     reducer: {
//         user: userReducer
//     }
// });

// export default appstore;