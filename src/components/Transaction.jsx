import styles from '../css/Transaction.module.css';
import PropTypes from "prop-types";

export const Transaction = ({ transactions }) => {
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
                {transactions.map(({id, type, amount, currency}) => {
                    return (
                        <tr key={id} className={styles.row}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>)
};

Transaction.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}





