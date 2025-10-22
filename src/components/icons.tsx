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

export function FutbolIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Soccer Ball</title>
      <circle cx="12" cy="12" r="10" />
      <path d="m12 5.2-4.2 2.6 1.6 4.7 4.2-2.5-1.6-4.8Z" />
      <path d="M16.4 14.8 12 17.3l-1.6-4.7 4.2-2.6 1.8 4.8Z" />
      <path d="m7.8 7.8 4.2 2.5L12 5.2 7.6 7.7Z" />
      <path d="m7.6 16.3 4.4-2.5 1.6 4.7-4.2-2.6-1.8-4.8Z" />
      <path d="M12 17.3-4.2 2.6 1.6-4.7-4.2 2.5 1.6 4.8Z" />
      <path d="m7.8 16.2 4.2-2.5L12 18.8l-4.4-2.5Z" />
      <path d="M12.2 7.8-4.2-2.5-1.6 4.7 4.2 2.6-1.8-4.8Z" />
    </svg>
  );
}

export function CreditCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Credit Card</title>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
