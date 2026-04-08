import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <div className={styles['error-message']} role="alert">
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
