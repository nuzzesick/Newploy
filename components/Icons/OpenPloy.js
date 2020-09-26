const OpenPloy = ({ link }) => (
  <>
    <a href={link} target="_blank" rel="noreferrer">
      <div className="open-external-ploy">
        <svg className="open-external-ploy-icon" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3492 0.286392L26.7127 1.65086L12.258 16.1055L10.8945 14.742L25.3492 0.286392Z" strokeWidth="0.8" />
          <path d="M27 9.64286H25.0715V1.92857H17.3572V0H27V9.64286Z" strokeWidth="0.8" />
          <path d="M22.1786 27H2.89286C1.25357 27 0 25.7464 0 24.1071V4.82143C0 3.18214 1.25357 1.92857 2.89286 1.92857H13.5V3.85714H2.89286C2.31429 3.85714 1.92857 4.24285 1.92857 4.82143V24.1071C1.92857 24.6857 2.31429 25.0714 2.89286 25.0714H22.1786C22.7571 25.0714 23.1429 24.6857 23.1429 24.1071V13.5H25.0714V24.1071C25.0714 25.7464 23.8179 27 22.1786 27Z" strokeWidth="0.8" />
        </svg>
      </div>
    </a>
  </>
);
export default OpenPloy;
