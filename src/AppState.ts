import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import SeedColorsSlice from "./SeedColorsSlice";


const rootReducer = combineReducers({
    SeedsColorsSlice : SeedColorsSlice
});

export type AppState = ReturnType<typeof rootReducer>;
export const configureStore = createStore(rootReducer, {}, devToolsEnhancer({}));