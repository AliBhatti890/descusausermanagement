// src/Components/Resource/Store/ReduxToolkit/Store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../AuthSlice/AuthSlice';

// Persist configuration
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const reduxStore = configureStore({
    reducer: {
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export const persistor = persistStore(reduxStore);

export default reduxStore;
