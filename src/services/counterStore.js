import { createStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

const counterStore = createStore(counterReducer);
export default counterStore;