const FacebookIcon = () => (
  <>
    <svg className="share-icon facebook-icon" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.12 0H0.88C0.39325 0 0 0.39325 0 0.88V21.12C0 21.6067 0.39325 22 0.88 22H21.12C21.6067 22 22 21.6067 22 21.12V0.88C22 0.39325 21.6067 0 21.12 0ZM18.579 6.42125H16.8218C15.444 6.42125 15.1773 7.07575 15.1773 8.03825V10.1585H18.4662L18.0373 13.4777H15.1773V22H11.748V13.4805H8.87975V10.1585H11.748V7.711C11.748 4.87025 13.4833 3.322 16.0187 3.322C17.2342 3.322 18.2765 3.41275 18.5818 3.454V6.42125H18.579Z" />
    </svg>
    <style jsx>
      {`
          .facebook-icon {
            transition: 0.2s;
          }
          .facebook-icon:hover {
            fill: #4267B2;
          }
        `}
    </style>
  </>
);
export default FacebookIcon;
