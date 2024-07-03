import { useState } from "react";
import AccountSelector from "./AccountSelector";
import "./TransactionExample.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const TransactionExample = ({ accounts }) => {

    const [selectedAccountFrom, setSelectedAccountFrom] = useState(null);
    const [selectedAccountTo, setSelectedAccountTo] = useState(null);
    const [transactionAmount, setTransactionAmount] = useState(0);

    const handleAccountSelectFrom = (accountNumber) => {
        const selectedAccount = accounts.find(account => account.accountNumber === accountNumber);
        setSelectedAccountFrom(selectedAccount);
    };

    const handleAccountSelectTo = (accountNumber) => {
        const selectedAccount = accounts.find(account => account.accountNumber === accountNumber);
        setSelectedAccountTo(selectedAccount);
    };

    const makeTransation = async () => {
        if (!selectedAccountFrom || !selectedAccountTo || transactionAmount <= 0) {
            console.error("Invalid transaction parameters");
            return;
        }

        //TODO: Call external, API use selectedAccountFrom and selectedAccountTo to update proper values
        try {
            // My idea 
            const response = await axios.post('http://your-api-endpoint/transactions', {
                sourceAccount: selectedAccountFrom.accountNumber,
                destinationAccount: selectedAccountTo.accountNumber,
                amount: transactionAmount,
                description: `Transfer from ${selectedAccountFrom.accountNumber} to ${selectedAccountTo.accountNumber}`
            });

            console.log("Transaction was made:", response.data);
        } catch (error) {
            console.error("Error making transaction:", error.message);
        }
    }

    return (
        <>
            <h1>Transaction Example</h1>
            <div className="transaction-selectors">
                <AccountSelector accounts={accounts} onAccountSelect={handleAccountSelectFrom} />
                <FontAwesomeIcon icon={faArrowRight} />
                <AccountSelector accounts={accounts} onAccountSelect={handleAccountSelectTo} />
            </div>
            <div className="transation-amount">
                <label id="transation-amount" htmlFor={"transation-amount-input"}>Enter Amount</label>
                <input 
                    id="transaction-amount-input"
                    type="number"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
                />
                <button onClick={makeTransation}>Make transaction</button>
            </div>
            <div>{selectedAccountFrom && selectedAccountFrom.accountNumber}</div>
            <div>{selectedAccountTo && selectedAccountTo.accountNumber}</div>
        </>
    );
};

export default TransactionExample;