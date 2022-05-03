/* eslint-disable-next-line */
export interface HatWizardIconProps {
  className?: string;
}

export function HatWizardIcon(props: HatWizardIconProps) {
  return (
    // https://fontawesome.com/icons/hat-wizard?s=solid
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M200 376l-49.23-16.41c-7.289-2.434-7.289-12.75 0-15.18L200 328l16.41-49.23c2.434-7.289 12.75-7.289 15.18 0L248 328l49.23 16.41c7.289 2.434 7.289 12.75 0 15.18L248 376L240 416H448l-86.38-201.6C355.4 200 354.8 183.8 359.8 168.9L416 0L228.4 107.3C204.8 120.8 185.1 141.4 175 166.4L64 416h144L200 376zM231.2 172.4L256 160l12.42-24.84c1.477-2.949 5.68-2.949 7.156 0L288 160l24.84 12.42c2.949 1.477 2.949 5.68 0 7.156L288 192l-12.42 24.84c-1.477 2.949-5.68 2.949-7.156 0L256 192L231.2 179.6C228.2 178.1 228.2 173.9 231.2 172.4zM496 448h-480C7.164 448 0 455.2 0 464C0 490.5 21.49 512 48 512h416c26.51 0 48-21.49 48-48C512 455.2 504.8 448 496 448z" />
    </svg>
  );
}

export default HatWizardIcon;
