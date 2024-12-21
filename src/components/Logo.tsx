export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-purple-500"
    >
      <path
        d="M16 2L30 16L16 30L2 16L16 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2L30 16H16V2Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
}