import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './data/state/store';
import { addAccount, removeAccount } from './data/state/financeSlice';

const FinanceDashboard: React.FC = () => {
  const accounts = useSelector((state: RootState) => state.finance.accounts);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddAccount = () => {
    dispatch(
      addAccount({
        id: 'acc_004',
        name: 'New Account',
        type: 'bank',
        balance: 0,
        provider: 'Monzo'
      })
    );
  };

  const handleRemoveAccount = (id: string) => {
    dispatch(removeAccount(id));
  };

  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            {account.name} - £{account.balance}
            <button onClick={() => handleRemoveAccount(account.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddAccount}>Add Account</button>
    </div>
  );
};

export default FinanceDashboard;