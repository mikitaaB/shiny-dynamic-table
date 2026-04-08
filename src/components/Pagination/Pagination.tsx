import Button from '../Button';
import styles from './Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    disabled: boolean;
    onPageChange: (page: number) => void;
}

const Pagination = ({
    currentPage,
    totalPages,
    disabled,
    onPageChange,
}: PaginationProps) => {
    if (totalPages <= 1) return <></>;

    return (
        <nav className={styles.pagination} aria-label='User list pagination'>
            <Button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={disabled || currentPage === 1}
                className={styles['pagination-button']}
                aria-label='Previous page'
            >
                {'Previous'}
            </Button>
            <span className={styles['pagination-info']}>
                Page {currentPage} of {totalPages}
            </span>
            <Button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={disabled || currentPage === totalPages}
                className={styles['pagination-button']}
                aria-label='Next page'
            >
                {'Next'}
            </Button>
        </nav>
    );
};

export default Pagination;
