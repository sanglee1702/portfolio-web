import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="30"
      height="34.8"
      viewBox="0 0 2500 2900"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M1169.97 888.151L949.646 674.65C775.598 506.919 700.393 261.873 749.827 25.2531L755.613 -7.66406e-05L387.001 419.624C184.024 651 199.272 1001.19 422.235 1213.63L1626.92 2362.07C1773.1 2501.93 1852.5 2698.07 1844.09 2900L2064.58 2677.31C2322.05 2417.29 2317.49 1997 2054.42 1742.63L1169.97 888.151Z" />
          <path d="M2465.07 -1.41736e-07H1368.43L1916.75 949.723L2465.07 -1.41736e-07Z" />
          <path d="M34 2900H1130.65L582.324 1950.28L34 2900Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
