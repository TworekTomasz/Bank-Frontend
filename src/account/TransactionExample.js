import { useState } from "react";
import AccountSelector from "./AccountSelector";
import "./TransactionExample.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TransactionExample = ({ accounts }) => {

    const [selectedAccountFrom, setSelectedAccountFrom] = useState(null);
    const [selectedAccountTo, setSelectedAccountTo] = useState(null);

    const handleAccountSelectFrom = (accountId) => {
        const selectedAccount = accounts.find(account => account.id === accountId);
        setSelectedAccountFrom(selectedAccount);
    };

    const handleAccountSelectTo = (accountId) => {
        const selectedAccount = accounts.find(account => account.id === accountId);
        setSelectedAccountFrom(selectedAccount);
    };
    return (
        <>
            <h1>Transaction Example</h1>
            <div className="transaction-selectors">
                <AccountSelector accounts={accounts} onAccountSelect={handleAccountSelectFrom} />
                <FontAwesomeIcon icon={faArrowRight} />
                <AccountSelector accounts={accounts} onAccountSelect={handleAccountSelectTo} />
            </div>
        </>
    );
};

export default TransactionExample;