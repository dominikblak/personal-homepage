import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import personalHomePageSlice from "../features/personalHomepage/personalHomePageSlice";
import themeSlice from "../common/themeSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomePageSlice,
    theme: themeSlice,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);
export default store;
