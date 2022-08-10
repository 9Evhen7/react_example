import styles from '../css/Friends.module.css';
import PropTypes from "prop-types";

const FriendListItem = ({ isOnline, avatar, name }) => {
        return (
    <>
        <span className={`${styles.status} ${isOnline?styles.isOnline:styles.isOfline}`}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
    </>)
}

export const Friends = ({ friends }) => { 
    return (
        <ul className={styles.friend_List}>
            {friends.map(({ isOnline, avatar, name, id }) => {
                return (
                    <li key={id} className={styles.friendListItem}>
                        <FriendListItem
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                    />
                    </li>

                )
            })}
            </ul>
    )
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,

    })),
}