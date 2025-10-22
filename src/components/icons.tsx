import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>SyntheticPei Logo</title>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" fill="currentColor" opacity="0.2" />
      <path d="M12 2a10 10 0 0 1 8.66 5H3.34A10 10 0 0 1 12 2Z" />
      <path d="m15.46 17-2-3.46-3.46 2L8 12l2-3.46 3.46-2L16 10l-2 3.46Z" />
      <path d="M12 22a10 10 0 0 0 8.66-5H3.34A10 10 0 0 0 12 22Z" />
    </svg>
  );
}
