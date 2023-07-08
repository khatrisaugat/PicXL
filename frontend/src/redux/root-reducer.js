import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistReducer(persistConfig, rootReducer);
