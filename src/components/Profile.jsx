import styles from '../css/Profile.module.css';
import PropTypes from "prop-types";

export const Profile = ({avatar,username, tag,location,stats}) => {
  return (
    <div className={styles.profile}>
  <div className="description">
    <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}/>
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

    <ul className={ styles.stats}>
    <li className={styles.statsItem}>
      <span className="label">Followers</span>
          <span className="quantity">{ stats.followers}</span>
    </li>
    <li className={styles.statsItem}>
      <span className="label">Views</span>
          <span className="quantity">{ stats.views}</span>
    </li>
    <li className={styles.statsItem}>
      <span className="label">Likes</span>
          <span className="quantity">{ stats.likes}</span>
    </li>
      </ul>
    </div>
  );
};


Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
  
};