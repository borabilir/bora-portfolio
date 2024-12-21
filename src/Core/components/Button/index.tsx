import React, { ReactNode, MouseEvent } from 'react';
import styles from './styles.module.scss';
import cx from 'Core/utils/cx';

type ButtonProps = {
    children: ReactNode;
    before?: ReactNode;
    after?: ReactNode;
    className?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    before,
    after,
    onClick,
}) => {
    return (
        <button className={cx(styles.button, className)} onClick={onClick}>
            {before && <span className={styles.before}>{before}</span>}
            {children}
            {after && <span className={styles.after}>{after}</span>}
        </button>
    );
};

export default Button;
