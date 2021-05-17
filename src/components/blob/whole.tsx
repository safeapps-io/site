import {ReactNode} from 'react';
import Blob from './blob';

import styles from './whole.scss';

export interface WholeProps {
    className?: string;
    title: ReactNode;
    description: ReactNode;
}

export default function Whole(props: WholeProps): JSX.Element {
    const { className } = props;
    return (
        <div className={styles.wrapper + (className ? ` ${className}` : '')}>
            <Blob/>
            <div className={styles.text}>
                <h3 className={styles.title}>
                  <span className={styles.back}>
                    {props.title}
                  </span>
                </h3>
                <p className={styles.description}>
                  <span className={styles.back}>
                    {props.description}
                  </span>
                </p>
            </div>
        </div>
    );
}
