import { Accounts } from "../data/types";

// export function accountsTotal(accounts: Accounts): number {
//     let total: number = 0 
//     for (const account of accounts) {
//         total += account.balance
//     }
//     return total;
// } 

export function accountsTotal(accounts: Accounts): number {
    return accounts.reduce((total, account) => total + account.balance, 0);
}