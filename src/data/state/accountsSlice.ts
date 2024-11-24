import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, AccountFilterCriteria, AccountState } from "../types";
import * as financeData from "../json/data.json" 
const initialState: AccountState = {
    accounts: financeData.accounts,
    filterCriteria: {
      accountProvider: [], 
      accountType:[]
    }
  };
  
  const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
      addAccount(state, action: PayloadAction<Account>) {
        state.accounts.push(action.payload);
      },

      updateAccount(state, action: PayloadAction<Account>) {
        const index = state.accounts.findIndex(account => account.id === action.payload.id);
        if (index !== -1) {
          state.accounts[index] = action.payload;
        }
      },

      removeAccount(state, action: PayloadAction<string>) {
        state.accounts = state.accounts.filter(account => account.id !== action.payload);
      },

      setFilterCriteria(state, action: PayloadAction<AccountFilterCriteria>) {
        state.filterCriteria = action.payload;
      },
    },
  });
  
  // Export actions
  export const {
    addAccount,
    updateAccount,
    removeAccount,
    setFilterCriteria
  } = accountsSlice.actions;
  
  // Export reducer
  export default accountsSlice.reducer;

  export const selectFilteredAccounts = createSelector(
    (state: { accounts: AccountState }) => state.accounts.accounts,
    (state: { accounts: AccountState }) => state.accounts.filterCriteria,
    (accounts, filterCriteria) => {
      const { accountType, accountProvider } = filterCriteria;
  
      return accounts.filter(account => {
        const matchesType = accountType.length === 0 || accountType.includes(account.type);
        const matchesProvider = accountProvider.length === 0 || accountProvider.includes(account.provider);
  
        return matchesType && matchesProvider;
      });
    }
  );

  export const selectAccountTypes = createSelector(
    (state: { accounts: AccountState }) => state.accounts.accounts,
    (accounts) => Array.from(new Set(accounts.map(account => account.type)))
  );
  
  export const selectAccountProviders = createSelector(
    (state: { accounts: AccountState }) => state.accounts.accounts,
    (accounts) => Array.from(new Set(accounts.map(account => account.provider)))
  );

