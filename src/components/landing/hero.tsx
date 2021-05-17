import screenshot from 'img/screenshot.png';

import Cta from 'components/cta';

import styles from './hero.scss';

export default function Hero(props: object):JSX.Element {
  return (
      <div className={styles.wrapper}>
        <figure className={styles.wide}/>
        <figure className={styles.narrow}/>

        <div className={styles.text}>
          <p style={ { '--multiplier': '0' } as any }>
            <span className={styles.back}>Get out of <span className="mark">debt</span></span>
          </p>
          <p style={ { '--multiplier': '1' } as any }>
            <span className={styles.back}>Save more <span className="mark">money</span></span>
          </p>
          <p style={ { '--multiplier': '2' } as any }>
            <span className={styles.back}>Plan for <span className="mark">future</span></span>
          </p>
          <p style={ { '--multiplier': '3' } as any }>
            <span className={styles.back}>Preserve your <span className="mark">privacy</span></span>
          </p>

          <div className={styles.cta} style={ { '--multiplier': '4' } as any }>
            <Cta/>
            <p>$59.99 a year. 30-day moneyback guarantee.</p>
          </div>
        </div>

        <div className={styles.screenshot + ' fake-transform'}>
          <img src={screenshot} alt="App screenshot" height="998" width="1384"/>
        </div>
      </div>
  )
}
