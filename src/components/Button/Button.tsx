import type { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary';
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
