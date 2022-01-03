import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IColor{
    name: string,
    color: string
}

interface IState{
    paletteName: string,
    id : string,
    emoji : string,
    colors : IColor[]
}

const SeedColorsSlice = createSlice({
    name : "SeedColorsSlice",
    initialState : new Array<IState>(),
    reducers : {
        completed(_state: IState[], action : PayloadAction<IState[]>){
            return action.payload;
        },
        started(_state : IState[]){
            return [];
        }
    }
});

export const {started, completed} = SeedColorsSlice.actions
export default SeedColorsSlice.reducer;