 import {configureStore}  from "@reduxjs/toolkit"
 import  useReducer  from "./userData/userSlice"
 export const store = configureStore({
     reducer:{user:useReducer},
     middleware:(getDefaultMiddleware) =>getDefaultMiddleware({
        serializableCheck:false
     })
 })