import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload;
        },

        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id == action.payload.id)
        }
    }
}
)


export default postSlice.reducer;
export const {getPosts,deletePost} = postSlice.actions;

