import './App.css';
import AccountTable from './account/AccountTable';
import AccountForm from './account/AccountForm';
import TransactionExample from './account/TransactionExample';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

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

  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div className="App">
      <AccountForm addAccount={addAccount} />
      <AccountTable accounts={accounts} />
      <TransactionExample accounts={accounts}/>
    </div>
  );
}

export default App;
