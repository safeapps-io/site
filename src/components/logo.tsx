import {useState} from 'react';
// import {horizontalSlide} from 'utils/horizontalSlide';

import styles from './logo.scss';

export default function Logo(props: object): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
      <div className={styles.wrapper} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className={styles.bracket}>[</div>
        { hovered && <div className={styles.safe} ref={handleRef}>safe</div> }
        <div className={styles.bracket}>]</div>

        <div className={styles.money}>money</div>
      </div>
  )
}

function handleRef(node: HTMLElement | null) {
    if (node !== null) {
        // const transition = horizontalSlide(node, {duration: 1000});
        // const start = performance.now();
        // const animator = (time= start) => {
        //     requestAnimationFrame(animator);
        // }
    }
}
