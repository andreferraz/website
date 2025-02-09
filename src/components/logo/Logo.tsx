import { useTranslations } from 'next-intl';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
  const t = useTranslations('common');

  return (
    <div className={`${className} relative inline-flex items-center`}>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          viewBox="0 0 256 233.725"
          className="relative z-10"
        >
          <defs>
            <clipPath id="a">
              <rect width="256" height="233.725" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              d="M246.377,184.2c-22.814,10.593-58.735,31.554-70.625,9.961-5.01-10.8-1.2-36.53,2.277-54,16.772-.188,27.014.756,46.824-2.212,23.9-3.581,31.082-16.823,3.363-16.365-9.45.156-25.835-1.362-45.4-2.869,2.4-11.129,9.24-43.047,11.771-57.61,4.5-25.921-6.285-89.935-53.81-46.248C92.606,59.139,53.487,119.772,29.526,162c-7.255,11.86-15.964,27.9-26.447,50.078-12.74,35.875,17.8,8.678,23.558,1.3,62.473-78.035,88.683-73.408,127.1-72.846-.347,1.224-.638,2.271-.857,3.112-2.683,10.324-19.478,59.866-2.017,78.266,21.4,25.5,84.907,2.488,89.458-2.134s28.868-46.169,6.053-35.576M85.935,117.711C101.37,96.5,116.611,77.276,127.324,68.222c29.356-24.81,33.595-32.791,37.667-4.269,2.337,16.37-1.113,36.8-4.984,53.184-24.2-1.433-50.692-2.053-74.071.573"
              transform="translate(0 0.001)"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
      <div className="ms-3">
        <strong>André Ferraz</strong> <br />
        {t('professionalTitle')}
      </div>
    </div>
  );
};
