import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api";

export type AbousUsItemType = {
  heading: string
  description: string
}

export type WeSolveProblemsItemType = {
  category: string
  items: string[]
}

export type ServicesItemType = {
  id: number
  spriteClassName: string
  heading: string
  description: string
}

export type WidgetsItemType = {
  img: string
  name: string
  id: number
  possibilities: string[]
}

export type IntegrationItemItemType = {
  websiteLink: string
  logo: {
    default: string
    gray: string
  }
}

export type IntegrationItemType = {
  category: string
  items: IntegrationItemItemType[]
}

export type OurClientsItemType = {
  icon: string
  name: string
} 

export type SolveCasesItemType = {
  heading: {
    heading: string
    description: string
  }
  description: string
  video: string
  videoPrivew: string
  id: number
}

export type ThankfulLettersItemType = {
  id: number
  logo: string
  companyName: string
  owner: string
  letter: string
}

export type QAndAItemType = {
  question: string
  id: number
  answer: string[]
}

const initialState = {
  aboutUs: [] as AbousUsItemType[],
  weSolveProblems: [] as WeSolveProblemsItemType[],
  services: [] as ServicesItemType[],
  widgets: [] as WidgetsItemType[],
  integration: [] as IntegrationItemType[],
  ourClients: [] as OurClientsItemType[],
  solveCases: [] as SolveCasesItemType[],
  thankfulLetters: [] as ThankfulLettersItemType[],
  QAndA: [] as QAndAItemType[],
};

export type StateKeysType = keyof typeof initialState

type SetStaticItemsType = {
  items: DocumentData[]
  key: StateKeysType
}

const setStaticItems = createAction<SetStaticItemsType>('static/setItems');

export const staticReducer = createReducer(initialState, builder => {
  builder.addCase(setStaticItems, (state, action) => {
    type KeyType = typeof action.payload.key;

    return {
      ...state,
      [action.payload.key]: action.payload.items as typeof initialState[KeyType]
    }
  });
  builder.addDefaultCase(() => { });
});

export const getStaticItems = createAsyncThunk('static/getItems', async (collection: StateKeysType, thunkAPI) => {
  let items = await itemsAPI.get(collection);
  thunkAPI.dispatch(setStaticItems({ items, key: collection }));
});