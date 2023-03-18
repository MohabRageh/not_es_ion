import { configureStore } from "@reduxjs/toolkit";
import asidePagesReducer from "../asideSlice/asideSlice"
export const store=configureStore(
    {
        reducer:{
            asidePages:asidePagesReducer
        }
    }
)
