import Link from 'next/link';

const Logo = () => (
  <>
    <Link href="/">
      <div className="logo-container">
        <svg className="icon" viewBox="0 0 793 208" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M183.034 27.2941C182.56 26.7915 182.116 26.2772 181.624 25.7861C164.707 8.86302 141.839 4.28702 130.56 15.5652L7.99066 138.135L40.092 170.236L183.034 27.2941Z" fill="#D9D9D9" />
          <path d="M59.0605 148.35C42.1431 131.427 19.2747 126.851 7.99067 138.135C-3.29333 149.419 1.28267 172.282 18.2058 189.199C35.1289 206.128 57.9916 210.698 69.2756 199.42C80.5538 188.136 75.9836 165.273 59.0605 148.35Z" fill="#C9C9C9" />
          <path d="M183.04 27.2942C198.767 44.0382 202.794 65.9013 191.84 76.8502L69.2756 199.42C80.5596 188.136 75.9836 165.279 59.0605 148.35L36.5907 125.88L159.155 3.31064L183.086 27.2422L183.04 27.2942Z" fill="#EFEFEF" />
          <path d="M191.21 19.1244C206.937 35.8684 210.97 57.7315 200.009 68.6804L77.4453 191.244C88.7293 179.966 84.1591 157.104 67.2302 140.18L52.9302 125.88L175.494 3.31064L191.256 19.0724L191.21 19.1244Z" fill="white" />
        </svg>
        <h3 className="logo">Newploy</h3>
      </div>
    </Link>
    <style jsx global>
      {`
          /* Mobile */
          @media only screen and (max-width: 768px) {
            .icon {
              width: 8rem;
            }
            .logo {
              top: -0.35rem;
              padding-left: 3rem;
              font-size: 1.3rem;
            }
          }
          /* Medium devices */
          @media only screen and (min-width: 768px) {
            .icon {
              width: 8rem;
            }
            .logo {
              top: -0.4rem;
              padding-left: 2.6rem;
              font-size: 1.1rem;
            }
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            .icon {
              width: 8.4rem;
            }
            .logo {
              top: 0.4rem;
              padding-left: 2.8rem;
              font-size: 1.15rem;
            }
          }
          /* Extra large devices (large laptops and desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
            .icon {
              width: 9.5rem;
            }
            .logo {
              top: 0.65rem;
              padding-left: 3.25rem;
              font-size: 1.2rem;
            }
          }
          @media only screen and (min-width: 1300px) {
            .icon {
              width: 9rem;
            }
            .logo {
              top: 0.35rem;
              padding-left: 3.3rem;
              font-size: 1.3rem;
            }
          }
          @media only screen and (min-width: 1400px) {
            .icon {
              width: 10rem;
            }
            .logo {
              top: 0.2rem;
              padding-left: 3.4rem;
              font-size: 1.35rem;
            }
          }
          @media only screen and (min-width: 1500px) {
            .icon {
              width: 10rem;
            }
            .logo {
              top: 0.2rem;
              padding-left: 3.6rem;
              font-size: 1.45rem;
            }
          }
          .logo-container {
            margin-top: 0.2rem;
          }
          .logo-container:hover {
            cursor: pointer;
          }
          .logo {
            position: absolute;
            color: var(--title);
            user-select: none;
          }
          .logo-container .icon {
            animation-name: logo-animation;
            animation-delay: 0.2s;
            animation-duration: 0.26s;
          }
          @keyframes logo-animation { 
            0%   {margin-top: -0.25rem}
            25%   {margin-top: -0.50rem}
            50%   {margin-top: -0.75rem}
            75%   {margin-top: -0.50rem}
            100%   {margin-top: -0.25rem}
          }
        `}
    </style>
  </>
);
export default Logo;
