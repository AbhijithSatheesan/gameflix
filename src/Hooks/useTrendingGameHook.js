import { useEffect } from "react";
import { browse_api, trending_api } from "../components/utils/backendconfig";
import { addTrendingBrowsePageContents } from "../components/utils/redux/browsePageSlice";
import { useDispatch } from "react-redux";


const useTrendingGameHook = () => {


    const dispatch = useDispatch();

    const browsePageContents = async () => {
        const data = await fetch(trending_api,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json', 
                }
            }
         );
         const json = await data.json();
         
         dispatch(addTrendingBrowsePageContents(json));
    };


    useEffect(() => {
        browsePageContents()
    }, []);
}


export default useTrendingGameHook;