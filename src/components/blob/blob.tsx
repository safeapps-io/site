import {svgPath} from 'utils/blobs';
import {generateRandomColor} from 'utils/color';
import {randBetween} from 'utils/random';

import styles from './blob.scss';

const offsets = [0, 20, 70, 100],
    generateGradient = () => {
        const stops: { offset: number; color: string }[] = [];

        for (let i = 0; i < 4; i++) {
            stops.push({
                offset: offsets[i]!,
                color: generateRandomColor(),
            });
        }

        return {
            id: Math.random().toString(),
            rotate: randBetween(0, 180),
            stops,
        };
    },
    generateSize = () => randBetween(200, 250),
    generatePath = (size: number, fillId: string, shadowId?: string) => ({
        d: svgPath({
            seed: Math.random(),
            extraPoints: randBetween(3, 8),
            randomness: randBetween(2, 5),
            size,
        }),
        fillId,
        shadowId,
    }),
    generateTransform = (size: number, i: number) =>
        ({'transform': `translate(${i == 1 ? size / 2 : 0}px, ${i == 2 ? size / 2 : 0}px)`});

export default function Blob(props: object): JSX.Element {
    const gradients = [generateGradient(), generateGradient(), generateGradient()],
        size = generateSize(),
        paths = [
            generatePath(size, gradients[0]!.id!),
            generatePath(randBetween(size / 2, size / 1.1), gradients[1]!.id!),
            generatePath(randBetween(size / 2, size / 1.1), gradients[2]!.id!),
        ];

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} width={size} height={size}>
            <defs>
                {gradients.map(({id, stops, rotate}) =>
                    <linearGradient key={id} id={id} gradientTransform={`rotate(${rotate})`}>
                        {stops.map(({offset, color}, index) =>
                            <stop key={index} offset={`${offset}%`} stopColor={color}/>
                        )}
                    </linearGradient>
                )}
            </defs>
            {paths.map(({d, fillId, shadowId}, i) =>
                <path
                    key={i}
                    className={i > 0 ? styles['not-first'] : ''}
                    d={d}
                    fill={`url(#${fillId})`}
                    style={generateTransform(size / 3, i)}/>
            )}
        </svg>
    );
}
