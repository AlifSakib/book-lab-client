import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type IsAuth = {
  isAuth: boolean;
};

const initialState: IsAuth = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
      // set the authstate to the localstorage
      localStorage.setItem("isAuth", JSON.stringify(action.payload));
      // also set the authstate to the sessionstorage
      sessionStorage.setItem("isAuth", JSON.stringify(action.payload));
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
