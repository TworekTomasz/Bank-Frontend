import { useState } from "react";
import AccountSelector from "./AccountSelector";
import "./TransactionExample.css";

const TransactionExample = ({ accounts }) => {

    const [selectedAccount, setSelectedAccount] = useState(null);

    const handleAccountSelect = (accountId) => {
        const selectedAccount = accounts.find(account => account.id === accountId);
        setSelectedAccount(selectedAccount);
    };

    return (
        <>
            <h1>Transaction Example</h1>
            <div className="transaction-selectors">
                <AccountSelector accounts={accounts} onAccountSelect={handleAccountSelect} />
                <AccountSelector accounts={accounts} onAccountSelect={handleAccountSelect} />
            </div>
        </>
    );
};

export default TransactionExample;