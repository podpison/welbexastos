import { initializeApp } from "firebase/app";
import { addDoc, collection, collection as fbCollection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFBRnPFHDG0gGWgJhHeJ1-Q736Cv3gaHE",
  authDomain: "welbexastos.firebaseapp.com",
  projectId: "welbexastos",
  storageBucket: "welbexastos.appspot.com",
  messagingSenderId: "901477271345",
  appId: "1:901477271345:web:d6847e472dca325bb79210",
  measurementId: "G-SQGDQ26R55"
};

const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);

export const itemsAPI = {
  get: async (collection: string) => {
    const itemsSnapshot = await getDocs(fbCollection(fs, collection));
    return itemsSnapshot.docs.map(d => d.data());
  },
};

export const customersAPI = {
  add: async (data: Object) => {
    const docRef = await addDoc(collection(fs, "contactUs"), data);
    return !!docRef;
  },
};