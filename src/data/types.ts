export interface Account {
    id: string,
    name: string
    type: string
    provider : string
    balance: number
    interestRate?: number
}

export interface Income {
    id: string
    name: string
    amount: number
    frequency: string
    accountId: string
}

export interface Expense {
    id: string
    name: string
    amount: number
    frequency: string
    accountId: string
}
export type Accounts = Account[]
export interface AccountFilterCriteria {
    accountType: string[]
    accountProvider: string[]
}

export interface AccountState {
    accounts: Accounts;
    filterCriteria: AccountFilterCriteria;
  }

  export type Incomes = Income[]
export type Expenses = Expense[]

