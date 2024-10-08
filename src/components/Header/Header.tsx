import { useTranslation } from 'react-i18next';
import { Navigation } from '../Navigation/Navigation';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import styles from './Header.module.scss';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <Button className={styles.te} variant="secondary" to="/te">
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 440 213"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M241.862781,28.9976879 C228.203781,39.8816879 215.108781,54.2906879 207.506781,70.0566879 C191.882781,102.460688 200.542781,132.243688 207.239781,151.573688 C216.358781,177.893688 234.825781,191.183688 256.835781,200.888688 C288.216781,214.727688 327.663781,215.658688 363.481781,206.408688 C376.107781,203.148688 395.711781,196.368688 399.989781,190.043688 C404.621781,183.195688 405.349781,169.952688 395.397781,164.134688 C385.692781,158.461688 384.750781,162.794688 355.841781,169.213688 C335.721781,173.680688 313.752781,174.456688 287.365781,163.065688 C270.723781,155.882688 259.462781,144.858688 255.615781,129.790688 C244.580781,86.5706879 268.420781,70.5406879 273.071781,67.6096879 L241.862781,28.9976879 Z"
                fill="#FFE700"
              ></path>
              <path
                d="M274.746781,79.8846879 C262.322781,78.2386879 225.877781,74.3766879 187.748781,67.6116879 C128.744781,57.1426879 59.3767809,42.6236879 37.2287809,41.0736879 C-5.3932191,38.0916879 -12.5002191,93.4626879 21.5247809,102.933688 C40.7947809,108.297688 93.8217809,102.663688 106.711781,128.111688 C110.637781,135.862688 121.023781,165.089688 132.788781,201.281688 C137.400781,215.471688 174.911781,213.239688 167.936781,183.009688 C163.954781,165.745688 154.885781,119.116688 154.885781,119.116688 C154.885781,119.116688 262.479781,130.526688 271.235781,131.283688 L274.746781,79.8846879 Z"
                fill="#FF0100"
              ></path>
              <path
                d="M331.403781,51.4076879 C345.066781,51.7706879 368.840781,55.2796879 379.547781,62.4426879 L439.253781,74.2086879 C439.819781,41.0706879 421.645781,23.2386879 401.280781,12.9586879 C385.822781,5.15668791 364.137781,-1.19731209 331.592781,0.191687911 C300.473781,1.51968791 267.754781,8.33668791 241.658781,29.1316879 L272.848781,67.8096879 C287.564781,58.5376879 306.058781,50.7346879 331.403781,51.4076879 Z"
                fill="#05FF00"
              ></path>
              <path
                d="M378.595781,61.8326879 C378.595781,61.8326879 381.739781,63.8466879 383.105781,65.0946879 C389.608781,71.0346879 391.761781,78.1326879 372.033781,81.3966879 L387.638781,129.646688 C423.141781,120.133688 438.807781,99.1846879 439.244781,73.6076879 L378.595781,61.8326879 Z"
                fill="#0053FF"
              ></path>
              <path
                d="M372.622781,81.3136879 C355.133781,84.2066879 321.227781,86.0776879 274.478781,79.8836879 L270.967781,131.283688 C346.882781,137.850688 373.579781,133.371688 388.227781,129.446688 L372.622781,81.3136879 Z"
                fill="#0053FF"
              ></path>
            </g>
          </svg>
        </Button>
        <Navigation className={styles.navigation}>
          <Button variant="secondary" to="/te/electricity-and-gas">
            {t('page.electricity_and_gas.sort_title')}
          </Button>
          <Button variant="secondary" to="/te/electric-vehicles">
            {t('page.electric_vehicles.sort_title')}
          </Button>
          <Button
            className={styles.account}
            variant="secondary"
            to="/te/customer-account"
          >
            <Icon className={styles.icon} icon="account_circle" />
            {t('page.customer_account.sort_title')}
          </Button>
        </Navigation>
      </div>
    </header>
  );
};
