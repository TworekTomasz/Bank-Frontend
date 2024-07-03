import { useState } from "react";

const AccountSelector = ({ accounts, onAccountSelect }) => {

    const [selectedAccount, setSelectedAccount] = useState('');

    const handleChange = (event) => {
        setSelectedAccount(event.target.value);
        onAccountSelect(event.target.value);
    };

    // Find the selected account object based on selectedAccount ID
    const selectedAccountObj = accounts.find(account => account.accountNumber === selectedAccount);

    return (
        <div>
            <label htmlFor="account-select">Choose an account:</label>
            <select
                id="account-select"
                value={selectedAccount}
                onChange={handleChange}
            >
                <option value="">--Please choose an account--</option>
                {accounts && accounts.map((account) => (
                    <option key={account.accountNumber} value={account.accountNumber}>
                        {account.accountNumber}
                    </option>
                ))}
            </select>
            {selectedAccountObj && (
                <div>
                    <p>Selected account: {selectedAccountObj.accountNumber}</p>
                    <p>Balance: {selectedAccountObj.balance}</p>
                    <p>Owner: {selectedAccountObj.ownerDto.name}</p>
                </div>
            )}
        </div>
    );
}

export default AccountSelector;