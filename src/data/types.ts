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
export interface FinanceState {
    accounts: Account[];
    incomes: Income[];
    expenses: Expense[];
  }