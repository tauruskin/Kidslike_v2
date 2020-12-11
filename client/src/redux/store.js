import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authReducer';
import childrenReducer from '../redux/children/childrenReducer';
import habbitReducer from '../redux/habbit/habbitReducer';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

// const childrenPersistConfig = {
//   key: 'children',
//   storage,
// };

export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, authReducer),
    children: childrenReducer,
    habbits: habbitReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
