import { createSlice } from "@reduxjs/toolkit";
import { BALLS_COUNT, PITS_COUNT } from "constants/game";

const initialState = {
    sockets: new Array(2 * PITS_COUNT).fill(BALLS_COUNT),
    tuzs: [-1, -1],
    kazans: [0, 0],
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {},
});

export const gameReducer = gameSlice.reducer;

export const { setUsers } = gameSlice.actions;
