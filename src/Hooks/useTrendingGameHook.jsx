import { useEffect } from "react";
import { browse_api } from "../components/utils/backendconfig";
import { addTrendingBrowsePageContents } from "..//components/utils/redux/browsePageSlice";
import { useDispatch } from "react-redux";


const useTrendingGameHook = () => {


    const dispatch = useDispatch();

    const browsePageContents = async () => {
        const data = await fetch(browse_api,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json', 
                }
            }
         );
         const json = await data.json();
         console.log(json);
         dispatch(addTrendingBrowsePageContents(json));
    };


    useEffect(() => {
        browsePageContents()
    }, []);
}


export default useTrendingGameHook;