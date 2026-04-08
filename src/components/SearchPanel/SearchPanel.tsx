import FieldSelect from '../FieldSelect';
import SearchInput from '../SearchInput';
import styles from './SearchPanel.module.css';

interface SearchPanelProps {
    field: string;
    query: string;
    setField: (field: string) => void;
    setQuery: (query: string) => void;
}

const SEARCH_FIELDS = [
    { value: 'name', label: 'Name' },
    { value: 'username', label: 'Username' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'company.name', label: 'Company Name' },
];

export const SearchPanel = ({
    field,
    query,
    setField,
    setQuery,
}: SearchPanelProps) => {
    return (
        <search className={styles['search-container']} aria-label='Search users'>
            <FieldSelect
                value={field}
                options={SEARCH_FIELDS}
                onChange={setField}
            />
            <SearchInput
                value={query}
                onChange={setQuery}
            />
        </search>
    );
};

export default SearchPanel;
