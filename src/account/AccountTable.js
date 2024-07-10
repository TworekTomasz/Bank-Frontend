import React from 'react';

const AccountTable = ({ accounts }) => {
  return (
    <div>
      <h2>Account Table</h2>
      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Balance</th>
            <th>Owner Name</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.accountNumber}>
              <td>{account.accountNumber}</td>
              <td>{account.balance}</td>
              <td>{account !== null && account.ownerDto !== null ? account.ownerDto.name : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
