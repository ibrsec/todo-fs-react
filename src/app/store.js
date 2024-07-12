import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import loginSlice from "./features/loginSlice";
import todoSlice from "./features/todoSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    login:loginSlice,
    todo:todoSlice,
})

const persistConfig = {
    key: "todo-fs",
    storage
}


const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store);