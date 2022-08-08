import styles from '../css/Friends.module.css';
import PropTypes from "prop-types";

export const Friends = ({friends}) => { 
    return (
        <ul className={styles.friendsList}>
                {friends.map(friend => { 
                    return (
                    <li key={friend.id} className={styles.friendsItem}>
                        <span className={`${styles.status} ${friend.isOnline?styles.isOnline:styles.isOfline}`}></span>
                        <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
                            <p className={styles.name}>{friend.name}</p>
                    </li>)
                })}
            </ul>
    )
};

Friends.propTypes = {
    friends: PropTypes.array,
}