import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga"
import sagaData from "./saga";

const sagaMiddleware = createSagaMiddleware()

const store= configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(sagaData)

export default store;