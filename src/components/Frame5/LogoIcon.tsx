import { memo, SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 86 65' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M33.2281 0L0.655579 32.5L33.2281 65' stroke='white' strokeWidth={8} />
    <path d='M52.7719 0L85.3444 32.5L52.7719 65' stroke='white' strokeWidth={8} />
    <path d='M27.7991 0L60.3717 32.5L27.7991 65' stroke='white' strokeWidth={8} />
  </svg>
);

const Memo = memo(LogoIcon);
export { Memo as LogoIcon };
