import styles from './FieldSelect.module.css';

type Option = Record<'value' | 'label', string>;

interface FieldSelectProps {
    value: string;
    options: Option[];
    onChange: (value: string) => void;
}

const FieldSelect = ({
    value,
    options,
    onChange,
}: FieldSelectProps) => {
    return (
        <div>
            <select
                id={'search-field'}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.select}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FieldSelect;
