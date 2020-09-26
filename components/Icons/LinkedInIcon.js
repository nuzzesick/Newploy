const LinkedInIcon = () => (
  <>
    <svg className="share-icon linkedin-icon" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.12 0H0.88C0.39325 0 0 0.39325 0 0.88V21.12C0 21.6067 0.39325 22 0.88 22H21.12C21.6067 22 22 21.6067 22 21.12V0.88C22 0.39325 21.6067 0 21.12 0ZM6.52575 18.7468H3.2615V8.24725H6.52575V18.7468ZM4.895 6.81175C4.5208 6.81175 4.155 6.70079 3.84386 6.49289C3.53272 6.28499 3.29022 5.9895 3.14702 5.64379C3.00382 5.29807 2.96635 4.91765 3.03935 4.55064C3.11236 4.18363 3.29255 3.8465 3.55715 3.5819C3.82176 3.3173 4.15888 3.13711 4.52589 3.0641C4.8929 2.9911 5.27332 3.02857 5.61904 3.17177C5.96475 3.31497 6.26024 3.55747 6.46814 3.86861C6.67604 4.17975 6.787 4.54555 6.787 4.91975C6.78425 5.96475 5.93725 6.81175 4.895 6.81175ZM18.7468 18.7468H15.4852V13.64C15.4852 12.4217 15.4633 10.857 13.7885 10.857C12.0918 10.857 11.8305 12.1825 11.8305 13.552V18.7468H8.57175V8.24725H11.7012V9.68275H11.7452C12.1797 8.85775 13.244 7.986 14.8335 7.986C18.139 7.986 18.7468 10.1612 18.7468 12.9882V18.7468V18.7468Z" />
    </svg>
    <style jsx>
      {`
          .linkedin-icon {
            transition: 0.2s;
          }
          .linkedin-icon:hover {
            fill: #2867B2;
          }
        `}
    </style>
  </>
);
export default LinkedInIcon;
