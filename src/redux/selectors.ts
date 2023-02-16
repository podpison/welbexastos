import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

//static reducer
export const selectAboutUsItems = createDraftSafeSelector(selectSelf, state => state.static.aboutUs);
export const selectWeSolveProblemItems = createDraftSafeSelector(selectSelf, state => state.static.weSolveProblems);
export const selectServiceItems = createDraftSafeSelector(selectSelf, state => state.static.services);
export const selectWidgetItems = createDraftSafeSelector(selectSelf, state => state.static.widgets);
export const selectIntegrationItems = createDraftSafeSelector(selectSelf, state => state.static.integration);
export const selectOurClientItems = createDraftSafeSelector(selectSelf, state => state.static.ourClients);
export const selectSolveCaseItems = createDraftSafeSelector(selectSelf, state => state.static.solveCases);
export const selectThankfulLetterItems = createDraftSafeSelector(selectSelf, state => state.static.thankfulLetters);
export const selectQAndAItems = createDraftSafeSelector(selectSelf, state => state.static.QAndA);