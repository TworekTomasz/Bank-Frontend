import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountTable = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/accounts');
      setAccounts(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

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
              <td>{account.ownerDto.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
