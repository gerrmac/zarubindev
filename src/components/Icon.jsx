const paths = {
  code: (
    <>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </>
  ),
  devices: (
    <>
      <rect x="2" y="4" width="14" height="11" rx="2" />
      <path d="M2 19h11" />
      <rect x="16" y="9" width="6" height="11" rx="1.6" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.2H11l-1 8.8 8.5-11.2H12l1-8.8Z" />,
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.4" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  telegram: (
    <path d="M21.5 4.3 2.9 11.4c-.9.35-.9.9-.15 1.12l4.7 1.47 1.8 5.6c.22.6.4.6.83.24l2.55-2.4 4.8 3.55c.9.5 1.5.24 1.7-.83l3-14.1c.3-1.3-.5-1.9-1.35-1.55Z" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  ),
};

export function Icon({ name, size = 20, strokeWidth = 1.7, className = "" }) {
  const filled = name === "bolt" || name === "telegram" || name === "github";
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
