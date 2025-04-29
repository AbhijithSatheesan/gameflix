import { createSlice } from "@reduxjs/toolkit";


const browsePageSlice = createSlice({
    name:'browse_page',
    initialState :{
        browsePageContents: null,
    },
    reducers: {
        addTrendingBrowsePageContents: (state, action) => {
            state.browsePageContents = action.payload;
        },
    },
});


export const { addTrendingBrowsePageContents } = browsePageSlice.actions;

export default browsePageSlice.reducer;



