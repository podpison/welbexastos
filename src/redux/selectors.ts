import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

//static reducer
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);