import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

// Create an interface
export interface InvoiceState {
  id: number;
  senderAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientsEmail: string;
  clientAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  itemName: string;
  quantity: string;
  price: string;
  total: string;
}
const initialState = {
  invoices: Array<InvoiceState>(),
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice: (state, { payload }) => {
      state.invoices.push(payload);
    },
    deleteInvoice: (state, { payload }) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== payload
      );
    },
  },
});

export const { addInvoice, deleteInvoice } = invoiceSlice.actions;

export const selectInvoice = (state: RootState) => state.invoice;

export default invoiceSlice.reducer;
