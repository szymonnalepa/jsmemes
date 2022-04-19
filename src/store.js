import { configureStore, createSlice } from "@reduxjs/toolkit";

export const memeSlice = createSlice({
	name: "memes",
	initialState: [],
	reducers: {
		setMemes: (state, action) => {
			return action.payload;
		},
		upvote: (state, action) => {
			const actionToUpvote = state.find((item) => item.title === action.payload);
			actionToUpvote.upvotes++;
		},
		downvote: (state, action) => {
			const actionToUpvote = state.find((item) => item.title === action.payload);
			actionToUpvote.downvotes++;
		},
	},
});

export const { setMemes, upvote, downvote } = memeSlice.actions;

export const store = configureStore({
	reducer: {
		memes: memeSlice.reducer,
	},
});
