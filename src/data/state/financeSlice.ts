import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FinanceState, Account, Income, Expense } from "../types";
import * as financeData from "../json/data.json" 
const initialState: FinanceState = {
    accounts: financeData.accounts,
    incomes: financeData.incomes,
    expenses: financeData.expenses,
  };
  
  const financeSlice = createSlice({
    name: 'finance',
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

      addIncome(state, action: PayloadAction<Income>) {
        state.incomes.push(action.payload);
      },

      updateIncome(state, action: PayloadAction<Income>) {
        const index = state.incomes.findIndex(income => income.id === action.payload.id);
        if (index !== -1) {
          state.incomes[index] = action.payload;
        }
      },

      removeIncome(state, action: PayloadAction<string>) {
        state.incomes = state.incomes.filter(income => income.id !== action.payload);
      },

      addExpense(state, action: PayloadAction<Expense>) {
        state.expenses.push(action.payload);
      },

      updateExpense(state, action: PayloadAction<Expense>) {
        const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
        if (index !== -1) {
          state.expenses[index] = action.payload;
        }
      },
      
      removeExpense(state, action: PayloadAction<string>) {
        state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
      },
    },
  });
  
  // Export actions
  export const {
    addAccount,
    updateAccount,
    removeAccount,
    addIncome,
    updateIncome,
    removeIncome,
    addExpense,
    updateExpense,
    removeExpense,
  } = financeSlice.actions;
  
  // Export reducer
  export default financeSlice.reducer;