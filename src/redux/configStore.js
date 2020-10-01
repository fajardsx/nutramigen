import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "AsyncStorage";
import reducer from "./reducer/reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistreducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistreducer);
  let presistor = persistStore(store);
  return { store, presistor };
};
