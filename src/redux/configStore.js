import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer/reducers";

const persistConfig = {
  key: "root",
  storage,
};
const persistreducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistreducer);
  let presistor = persistStore(store);
  return { store, presistor };
};
