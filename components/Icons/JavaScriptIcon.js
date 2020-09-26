const JavaScriptIcon = ({ type }) => (
  <>
    <svg className="javascript-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H20V20H0V0ZM18.3625 15.2313C18.2162 14.3163 17.62 13.5513 15.8594 12.8356C15.2475 12.5494 14.5638 12.3475 14.3619 11.885C14.2869 11.6113 14.2738 11.4619 14.3225 11.2987C14.4494 10.7581 15.0844 10.5988 15.5856 10.7487C15.9113 10.8494 16.2106 11.0969 16.3994 11.4975C17.2619 10.9344 17.2619 10.9344 17.8612 10.56C17.6369 10.2119 17.5263 10.0588 17.3731 9.9125C16.8488 9.32312 16.1494 9.02375 15.0131 9.05L14.4237 9.125C13.8606 9.26188 13.3238 9.56125 12.9981 9.96187C12.0506 11.0363 12.3244 12.9113 13.4731 13.6894C14.6094 14.5387 16.2725 14.7244 16.4875 15.5256C16.6862 16.5025 15.7619 16.815 14.8469 16.7006C14.1731 16.5506 13.7987 16.2125 13.385 15.5875L11.8612 16.4631C12.0338 16.8638 12.2356 17.0362 12.535 17.3875C13.9838 18.8494 17.61 18.7744 18.2606 16.5506C18.2831 16.4756 18.4594 15.9613 18.3225 15.1769L18.3625 15.2313ZM10.8756 9.1925H9.00375C9.00375 10.8069 8.99375 12.4119 8.99375 14.03C8.99375 15.0556 9.04562 15.9994 8.88 16.2894C8.60313 16.8625 7.89688 16.7906 7.57438 16.69C7.24563 16.5275 7.07625 16.3025 6.88438 15.9769C6.82875 15.8888 6.79 15.8144 6.77688 15.8144L5.25688 16.7519C5.51063 17.2762 5.88188 17.7288 6.36063 18.015C7.07375 18.4412 8.03063 18.5781 9.03312 18.3538C9.68437 18.165 10.2475 17.7775 10.54 17.1787C10.9663 16.4037 10.875 15.4537 10.8719 14.3888C10.8819 12.6762 10.8719 10.9644 10.8719 9.23875L10.8756 9.1925Z" />
    </svg>
    {
        type === 'carrousel' ? (
          <style>
            {`
              .javascript-icon {
                width: 1.6rem;
                height: 1.6rem;
                fill: var(--carrousel-icon);
                transition: 0.2s;
              }
              .carrousel:hover .javascript-icon {
                fill: #fdd83e;
              }
            `}
          </style>
        ) : null
      }
  </>
);
export default JavaScriptIcon;
