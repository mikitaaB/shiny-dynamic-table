import styles from './SearchInput.module.css';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchInput = ({
    value,
    onChange,
}: SearchInputProps) => {
    return (
        <div>
            <input
                id={'search-query'}
                type='search'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={'Search...'}
                className={styles.input}
            />
        </div>
    );
};

export default SearchInput;
