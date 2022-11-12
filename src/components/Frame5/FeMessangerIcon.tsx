import { memo, SVGProps } from 'react';

const FeMessangerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.2367 25.7966L16.97 21.1258L8.75 25.9143L17.76 15.8421L22.0267 20.513L30.2433 15.7245L21.235 25.7966H21.2367ZM19.4983 4C10.3867 4 3 11.2767 3 20.2549C3 25.3612 5.39 29.9179 9.13 32.8977V39.119L14.76 35.8284C16.26 36.2709 17.8517 36.5097 19.4983 36.5097C28.6117 36.5097 35.9983 29.2313 35.9983 20.2549C35.9983 11.2767 28.6117 4 19.4983 4V4Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(FeMessangerIcon);
export { Memo as FeMessangerIcon };
