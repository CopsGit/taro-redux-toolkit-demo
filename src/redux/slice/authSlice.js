import { createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: "666",
        error: null,
        loading: false,
    },
    reducers: {
        saveUserInfo: (state, action) => {
            state.userInfo = action.payload;
        }
    },
});

export default authSlice.reducer;
export const {
  saveUserInfo
} = authSlice.actions;
