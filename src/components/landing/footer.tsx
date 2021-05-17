import {about, terms, forum, privacy, cookie} from 'core/routes';

import styles from './footer.scss';

const links = [
    [about, 'about'],
    [forum, 'forum'],
    [terms, 'terms of service'],
    [privacy, 'privacy policy'],
    [cookie, 'cookie policy'],
    ['https://github.com/safeapps-io', 'github'],
];

export default function Footer(props: object): JSX.Element {
    return (
        <footer className={styles.footer}>
            <div className="columns">
                <ul className={styles.ul}>
                    {links.map(([url, text], i) => <li><a href={url}>{text}</a></li>)}
                </ul>
                <div className={styles.copy}>
                    made by <a href="https://dkzlv.com/" target="_blank" rel="noopener">@dkzlv</a>
                </div>
            </div>
        </footer>
    )
}
