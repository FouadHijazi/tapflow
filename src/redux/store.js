import { configureStore } from "@reduxjs/toolkit";
import informations from "./reducers/profileInfo"

export default configureStore({
    reducer: {
        informations : informations
    },
});