import { createStore } from 'redux'; export const store = createStore((state = {}) => state); export const persistor = { subscribe: () => {}, dispatch: () => {}, getState: () => ({}), replaceReducer: () => {} }

