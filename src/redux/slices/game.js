import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    score: 0,
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const gameReducer = gameSlice.reducer;

export const { setUsers } = gameSlice.actions;
