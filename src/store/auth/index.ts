import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setloginAddress, setlogoutAddress } from "./actions";

const PREFIX = "auth";

const initialState: any = {
  loginAddress: "",
};

const setAuth = (state: any, loginAddress: any) => {
  state.loginAddress = loginAddress;
};

const logout = (state: any) => {
  localStorage.removeItem("loginAddress");
  state.loginAddress = "";
};

export const authReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setloginAddress.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setAuth(state, action.payload.loginAddress);
      }
    );
    builder.addCase(setlogoutAddress.fulfilled.type, (state: any) => {
      logout(state);
    });
  },
});

export { setloginAddress, setlogoutAddress };
export default authReducer.reducer;
