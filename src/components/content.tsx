import Hero from 'components/landing/hero';
import Features from 'components/landing/features';
import Pricing from 'components/landing/pricing';
import SmallFeatures from 'components/landing/small-features';

import {generateRandomColorsForVars, hslToRgb, invertColor} from 'utils/color';
import {randBetween} from 'utils/random';

import styles from './content.scss';

const vars = (() => {
    /**
     * 1-3 back figure #1 gradients
     * 4 back figure #1 shadow
     * 5-7 back figure #2 gradients
     * 8 back figure #2 shadow
     *
     * 1-8 button border gradient
     * 1 text emphasis color
     */
    const colors = generateRandomColorsForVars(7),
        hue = randBetween(0, 1),
        sat = randBetween(0.5, 0.8),
        color8 = hslToRgb(hue, sat, randBetween(0.8, 0.95)),
        // We need to lower the lightness, because otherwise the inverted color is just different
        // tones of black
        toInvert = hslToRgb(hue, sat, 0.5);

    colors['color8'] = color8;
    colors['color8-inverted'] = invertColor(toInvert);
    return Object.fromEntries(Object.entries(colors).map(([key, value]) => [`--${key}`, value]));
})();


export default function Content(props: object): JSX.Element {
    return (
        <>
            <h1 className={styles.h1}>
                World's first{' '}<span className={styles.secure}>100%&nbsp;secure</span> finance tracker
            </h1>

            <div className={styles.hero} style={vars}>
                <Hero/>
            </div>

            <h2 className={styles.h2}>What do we have</h2>
            <Features/>

            <div className={styles['small-feat']}>
                <SmallFeatures/>
            </div>

            <div style={vars}>
                <Pricing/>
            </div>
        </>
    )
}
