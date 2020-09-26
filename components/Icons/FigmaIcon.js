const FigmaIcon = ({ type }) => (
  <>
    <svg className="figma-icon" viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="figma-icon-1" d="M6.25 38C9.7 38 12.5 35.1627 12.5 31.6667V25.3333H6.25C2.8 25.3333 0 28.1707 0 31.6667C0 35.1627 2.8 38 6.25 38Z" />
      <path id="figma-icon-2" d="M0 19C0 15.504 2.8 12.6667 6.25 12.6667H12.5V25.3333H6.25C2.8 25.3333 0 22.496 0 19Z" />
      <path id="figma-icon-3" d="M0 6.33333C0 2.83733 2.8 0 6.25 0H12.5V12.6667H6.25C2.8 12.6667 0 9.82933 0 6.33333Z" />
      <path id="figma-icon-4" d="M12.5 0H18.75C22.2 0 25 2.83733 25 6.33333C25 9.82933 22.2 12.6667 18.75 12.6667H12.5V0Z" />
      <path id="figma-icon-5" d="M25 19C25 22.496 22.2 25.3333 18.75 25.3333C15.3 25.3333 12.5 22.496 12.5 19C12.5 15.504 15.3 12.6667 18.75 12.6667C22.2 12.6667 25 15.504 25 19Z" />
    </svg>
    {
        type === 'carrousel' ? (
          <style>
            {`
              .figma-icon {
                width: 1.6rem;
                height: 1.6rem;
                fill: var(--carrousel-icon);
                transition: 0.2s;
              }
              .carrousel:hover #figma-icon-1 {
                fill: #0ACF83;
              }
              .carrousel:hover #figma-icon-2 {
                fill: #A259FF;
              }
              .carrousel:hover #figma-icon-3 {
                fill: #F24E1E;
              }
              .carrousel:hover #figma-icon-4 {
                fill: #FF7262;
              }
              .carrousel:hover #figma-icon-5 {
                fill: #1ABCFE;
              }
            `}
          </style>
        ) : null
      }
  </>
);
export default FigmaIcon;
