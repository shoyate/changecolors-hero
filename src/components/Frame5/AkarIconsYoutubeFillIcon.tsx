import { memo, SVGProps } from 'react';

const AkarIconsYoutubeFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_140_12)'>
      <mask
        id='mask0_140_12'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={60}
        height={60}
      >
        <path d='M0 0H60V60H0V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_140_12)'>
        <path
          d='M58.75 16.2675C58.4103 15.0556 57.7485 13.9584 56.835 13.0925C55.8957 12.2 54.7445 11.5616 53.49 11.2375C48.795 10 29.985 10 29.985 10C22.1433 9.91078 14.3036 10.3032 6.51 11.175C5.25548 11.523 4.10641 12.1757 3.165 13.075C2.24 13.965 1.57 15.0625 1.22 16.265C0.379232 20.7944 -0.02927 25.3934 0 30C-0.03 34.6025 0.3775 39.2 1.22 43.735C1.5625 44.9325 2.23 46.025 3.1575 46.9075C4.085 47.79 5.24 48.4275 6.51 48.765C11.2675 50 29.985 50 29.985 50C37.8367 50.0893 45.6864 49.6969 53.49 48.825C54.7445 48.5009 55.8957 47.8625 56.835 46.97C57.7482 46.1043 58.4092 45.0069 58.7475 43.795C59.6102 39.2674 60.0297 34.6665 60 30.0575C60.0649 25.429 59.6459 20.8064 58.75 16.265V16.2675ZM24.005 38.56V21.4425L39.655 30.0025L24.005 38.56Z'
          fill='white'
        />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_140_12'>
        <rect width={60} height={60} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(AkarIconsYoutubeFillIcon);
export { Memo as AkarIconsYoutubeFillIcon };
