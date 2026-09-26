import type { SVGProps } from "react";

export type AuthIconName =
  | "arrow"
  | "bolt"
  | "check"
  | "eye"
  | "eyeOff"
  | "lock"
  | "pin"
  | "shield"
  | "user"
  | "userPlus";

type AuthIconProps = SVGProps<SVGSVGElement> & {
  name: AuthIconName;
};

export function AuthIcon({ name, ...props }: AuthIconProps) {
  const drawing = {
    arrow: (
      <>
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    bolt: <path d="m13 2-8 11h6l-1 9 9-12h-6l1-8Z" fill="currentColor" stroke="none" />,
    check: (
      <>
        <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" />
        <path d="m8 12 2.5 2.5L16 9" stroke="#fff" strokeWidth="2" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    eyeOff: (
      <>
        <path d="M3 3 21 21" />
        <path d="M10.6 7.1A10.8 10.8 0 0 1 12 7c6 0 9.5 5 9.5 5a15.7 15.7 0 0 1-3.4 3.3" />
        <path d="M6.1 8.2A15.3 15.3 0 0 0 2.5 12s3.5 5 9.5 5c1.1 0 2.1-.2 3-.4" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    pin: (
      <>
        <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
    shield: (
      <path
        d="M12 2 4 5v6c0 5.1 3.1 8.5 8 11 4.9-2.5 8-5.9 8-11V5l-8-3Z"
        fill="currentColor"
        stroke="none"
      />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 20v-1.2a5.5 5.5 0 0 1 5.5-5.5h2a5.5 5.5 0 0 1 5.5 5.5V20H5.5Z" />
      </>
    ),
    userPlus: (
      <>
        <circle cx="9" cy="8" r="3.3" />
        <path d="M3.5 19v-1.1a5.1 5.1 0 0 1 5.1-5.1h1.2a5.1 5.1 0 0 1 5.1 5.1V19H3.5Z" />
        <path d="M18.5 8v6M15.5 11h6" />
      </>
    ),
  } satisfies Record<AuthIconName, React.ReactNode>;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {drawing[name]}
    </svg>
  );
}
