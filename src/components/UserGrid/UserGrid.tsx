
import SkeletonCard from '../SkeletonCard';
import UserCard from '../UserCard';
import { ENTRY_LIMIT } from '../../constants';
import type { User } from '../../types/user';
import styles from './UserGrid.module.css';

interface UserGridProps {
    users: User[];
    loading: boolean;
}

const UserGrid = ({ users, loading }: UserGridProps) => {
    if (loading) {
        return (
            <div className={styles['user-grid']} aria-busy='true'>
                {Array.from({ length: ENTRY_LIMIT }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className={styles['no-results']} aria-live='polite'>
                {'No results'}
            </div>
        );
    }

    return (
        <div className={styles['user-grid']} aria-live='polite'>
            {users.map((user, i) => (
                <UserCard key={user.id} user={user} index={i} />
            ))}
        </div>
    );
};

export default UserGrid;
