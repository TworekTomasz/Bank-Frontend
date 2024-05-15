import React, { useState } from 'react';
import axios from 'axios';

const AccountForm = () => {
  const [accountData, setAccountData] = useState({
    accountNumber: '',
    balance: '',
    ownerName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData({ ...accountData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        accountNumber: accountData.accountNumber,
        balance: accountData.balance,
        ownerDto: {
          name: accountData.ownerName
        }
      };
      
      // Check if addressDto exists before adding it to the request data
      if (accountData.addressDto) {
        data.addressDto = accountData.addressDto;
      }

      const response = await axios.post('http://localhost:8080/accounts', data);
      console.log('Account created:', response.data);
      // Optionally, you can clear the form after submission
      setAccountData({
        accountNumber: '',
        balance: '',
        ownerName: ''
      });
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={accountData.accountNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Balance:</label>
          <input
            type="text"
            name="balance"
            value={accountData.balance}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Owner Name:</label>
          <input
            type="text"
            name="ownerName"
            value={accountData.ownerName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Account</button>
      </form>
    </div>
  );
};

export default AccountForm;
