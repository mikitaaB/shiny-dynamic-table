import type { CSSProperties } from 'react';
import type { User } from '../../types/user';
import styles from './UserCard.module.css';

interface UserCardProps {
    user: User;
    index: number;
}

const UserCard = ({ user, index }: UserCardProps) => {
    return (
        <article
            className={styles['user-card']}
            style={{ '--index': index } as CSSProperties}
        >
            <h3 className={styles['user-name']}>{user.name}</h3>
            <p className={styles['user-username']}>@{user.username}</p>
            <p className={styles['user-data-item']}>{user.email}</p>
            <p className={styles['user-data-item']}>{user.phone}</p>
            {user.company && <p className={styles['user-data-item']}>{user.company.name}</p>}
        </article>
    );
};

export default UserCard;
