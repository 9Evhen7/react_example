import styles from "../css/Friends.module.css";
import PropTypes from "prop-types";

export const FriendListItem = (friend) => {
  const { isOnline, avatar, name, id } = friend.friend;
  return (
    <li key={id} className={styles.friendListItem}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.isOnline : styles.isOfline
        }`}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  }),
};
