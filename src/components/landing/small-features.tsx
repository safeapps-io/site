import styles from './small-features.scss';

const smallFeatures = [
    '∞ transactions and categories',
    '∞ wallets',
    '∞ wallet participants',
    'all the platforms: iOS, Android, Mac, Windows, Web',
];

export default function SmallFeatures(props: object): JSX.Element {
    return (
        <>
            <p className={styles.also}>what goes without saying:</p>
            <ul className={styles.ul}>
                {smallFeatures.map((text, i) => <li key={i} className={styles.li}>{text}</li>)}
            </ul>
        </>
    );
}
