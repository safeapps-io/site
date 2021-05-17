import {Feature} from 'components/blob';

import styles from './features.scss';

export default function Features(props: object): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <Feature
                className={styles.feature}
                title={'End-to-end encryption'}
                description={'No user data leaves the client in plaintext.'}
            />

            <Feature
                className={styles.feature}
                title={'Smart import'}
                description={
                    <>Upload any OFX/CSV file from any bank in the world. Leave the rest to us.<br/>
                    Save up to 5 hours a month.</>
                }
            />

            <Feature
                className={styles.feature}
                title={'Meaningful insights'}
                description={'Break transactions into categories. Search in the data. Generate reports.'}
            />

            <Feature
                className={styles.feature}
                title={'Asset management'}
                description={'Track your assets and incomes to see your net worth at any time.'}
            />

           <Feature
                className={styles.feature}
                title={'Open-sourced to the end'}
                description={<><a href="https://github.com/safeapps-io">Check the code</a>. Run your own instance. Be sure
                    we don’t cheat.</>
                }
            />

            <Feature
                className={styles.feature}
                title={'Complete anonymity'}
                description={'Sign up with a username, pay with crypto. No phone or email is required.'}
            />
        </div>
    );
}
