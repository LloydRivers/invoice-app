import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeSlice from "features/slices/themeSlice/themeSlice";
import invoiceReducer from "features/slices/invoice/invoiceSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    invoice: invoiceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
