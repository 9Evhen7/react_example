import styles from '../css/Transaction.module.css';
export const Transaction = ({transactions}) => {
    return (
        <table className={styles.table}>
        <thead className={styles.head}>
            <tr className={styles.row}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
            <tbody className={styles.body}>
                {transactions.map(transaction => { 
                    return (
                    <tr key={transaction.id} className={styles.row}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>)
}





