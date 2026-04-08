import styles from './SkeletonCard.module.css';

const SkeletonCard = () => {
    return (
        <div className={styles['skeleton-card']}>
            <div className={`${styles['skeleton-line']} ${styles['title']}`}></div>
            <div className={styles['skeleton-line']}></div>
            <div className={styles['skeleton-line']}></div>
            <div className={`${styles['skeleton-line']} ${styles['short']}`}></div>
        </div>
    );
};

export default SkeletonCard;