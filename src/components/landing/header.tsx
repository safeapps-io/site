import Logo from '../logo';

import styles from './header.scss';

export default function Header(props: object): JSX.Element {
  return (
      <nav className={styles.nav}>
        <div className={styles.empty}/>
        <a href="/"><Logo/></a>
        <a className={styles['app-link']} href="https://money.safeapps.io/" rel="external"
        ><span>Go to app</span><span className={styles.icon}
        ><svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
        ><path
            d="M8.5 9.5l2-2-2-2m-3 4l2-2-2-2"
            stroke="currentColor"
            strokeLinecap="square"/></svg
        ></span>
        </a>
      </nav>
  );
}
