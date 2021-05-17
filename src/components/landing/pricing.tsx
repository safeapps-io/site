import Cta from 'components/cta';

import styles from './pricing.scss';

export default function Pricing(props: object): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <p className={styles.price}>$<span className={styles.numbers}>59.99</span><span className={styles.duration}>/year</span></p>
            <p className={styles.trial}>30-day money back guarantee</p>

            <div className={styles.cta}>
                <Cta/>
            </div>
        </div>
    )
}
