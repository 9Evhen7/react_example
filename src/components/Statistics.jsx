import styles from '../css/Statistics.module.css';
export const Statistics = ({stats}) => {
    return (
        <div className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>

            <ul className={styles.list}>
                {stats.map(stat => { 
                    return (
                    <li key={stat.id} className={styles.item}>
                        <span>{stat.label}</span>
                        <span>{stat.percentage}%</span>
                    </li>)
                })}
            </ul>
        </div>
);};


