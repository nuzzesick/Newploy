import { useState, useEffect } from 'react';
import LogoWhite from './LogoWhite';
import LogoBlack from './LogoBlack';
import OpenPloy from './Icons/OpenPloy';

const Header = ({ link }) => {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark');
    } else if (localStorage.getItem('theme') === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);
  const changeTheme = () => {
    theme === 'dark' ? (
      setTheme('light'),
      localStorage.setItem('theme', 'light')
    ) : (
      setTheme('dark'),
      localStorage.setItem('theme', 'dark')
    );
  };
  return (
    <>
      <header
        className="header"
      >
        {
        theme === 'dark'
          ? (
            <style jsx global>
              {`
              body {
                --background: #060606;
                --title: #ffffff;
                --ploy-title: #E9E9E9;
                --published: #424242;
                --gray: #424242;
                --input: #424242;
                --primary: #3083FF;
                --carrousel-icon: #646464;
                --share-icon: #bfbfbf;
                --header-background: #060606f0;
                --header-shadow: #0000004f;
                background-color: var(--background);
              }
            `}
            </style>
          )
          : (
            <style jsx>
              {`
              body {
                --background: #ffffff;
                --title: #060606;
                --ploy-title: #1d1d1d;
                --published: #424242;
                --gray: #424242;
                --input: #e2e2e2;
                --primary: #3083FF;
                --carrousel-icon: #646464;
                --share-icon: #646464;
                --header-background: #ffffffe6;
                --header-shadow: #dedede4f;
                background-color: var(--background);
              }
            `}
            </style>
          )
}
        <div className="header-container">
          <div className="header-content">
            {
              theme === 'dark' ? <LogoWhite />
                : <LogoBlack />
            }
            <div className="theme-selector">
              {
                link ? <OpenPloy link={link} /> : null
              }
              <button
                type="button"
                className="switch-theme"
                onClick={() => changeTheme()}
              >
                {
                  theme === 'dark'
                    ? (
                      <>
                        <svg className="theme-switcher" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.61812 14.5C7.61812 18.2964 10.7064 21.3846 14.5027 21.3846C18.2991 21.3846 21.3874 18.2964 21.3874 14.5C21.3874 10.7036 18.2991 7.61538 14.5027 7.61538C10.7064 7.61538 7.61812 10.7036 7.61812 14.5ZM13.125 24.125H15.875V28.25H13.125V24.125ZM13.125 0.75H15.875V4.875H13.125V0.75ZM0.75 13.125H4.875V15.875H0.75V13.125ZM24.125 13.125H28.25V15.875H24.125V13.125Z" />
                          <path d="M5.75089 25.1947L3.80664 23.2505L6.72301 20.3341L8.66726 22.2784L5.75089 25.1947Z" />
                          <path d="M20.3328 6.723L23.2505 3.80525L25.1948 5.7495L22.277 8.66725L20.3328 6.723Z" />
                          <path d="M6.72301 8.66863L3.80664 5.75088L5.75227 3.80663L8.66726 6.72438L6.72301 8.66863Z" />
                          <path d="M25.1948 23.2505L23.2505 25.1947L20.3328 22.277L22.277 20.3327L25.1948 23.2505Z" />
                        </svg>
                      </>
                    )
                    : (
                      <>
                        <svg className="theme-switcher" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M27 18.0917C24.4722 19.0724 21.7137 19.297 19.0605 18.738C16.4073 18.179 13.9739 16.8606 12.0567 14.9433C10.1394 13.0261 8.82099 10.5927 8.262 7.93949C7.70302 5.28631 7.92757 2.52784 8.90832 0C5.87195 1.18331 3.34405 3.38968 1.76107 6.23818C0.178101 9.08668 -0.360581 12.3985 0.238033 15.6019C0.836647 18.8052 2.53498 21.699 5.03981 23.7836C7.54464 25.8682 10.6987 27.0128 13.9575 27.0197C16.7783 27.0204 19.5333 26.1682 21.8609 24.5748C24.1886 22.9815 25.98 20.7215 27 18.0917V18.0917Z" />
                        </svg>
                      </>
                    )
                }
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
