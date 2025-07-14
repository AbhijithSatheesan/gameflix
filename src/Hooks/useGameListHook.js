import { useEffect } from "react";
import { browse_api } from "../components/utils/backendconfig";
import { addGameListContents } from "../components/utils/redux/gameListSlice";
import { useDispatch, useSelector } from "react-redux";


const useGameListHook = () => {
    const dispatch = useDispatch();

    //  Lets check if game list is already in redux, if not then we will fetch it
    const gameListContents = useSelector((state) => state.gamelist?.gameListContents);

    const fetchGameList = async () => {
        try {
            const response = await fetch(browse_api, {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                },
            });

            const json = await response.json();

            // Lets dispatch the game list to redux
            dispatch(addGameListContents(json));        
        } catch (error) {
            console.error("Error fetching game list", error);
        }
    }


useEffect(() => {
    //  fetch only if game list is not already in redux
    if (!gameListContents) {
        fetchGameList();
    }
}, [gameListContents]); // Dependenccy array makes sure it will run only when the gamelistcontents changes

};

export default useGameListHook;
