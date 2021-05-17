import {ReactNode} from 'react';

import Header from './landing/header';
import Meta from './meta';
import Footer from './landing/footer';

import styles from './app.scss';

export interface AppProps {
    children?: ReactNode;
}

export default function App(props: AppProps): JSX.Element {
    return (
        <>
            <Meta
                title="[safe] money: 100% secure finance tracker"
                description="Safe, end-to-end encrypted app to track your finances, get out of debt and live the full life without a corporation trading your secrets."
            />

            <div className={styles.container}>
                <Header/>
                <main className={styles.main}>
                    {props.children}
                </main>
                <Footer/>
            </div>
        </>
    );
}
