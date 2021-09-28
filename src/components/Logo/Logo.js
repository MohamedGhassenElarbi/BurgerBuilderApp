import LogoImage from '../../assets/Images/burgerLogo.png'
import styles from './Logo.module.css'
const Logo = () => {
    return(
        <div className={styles.Logo}>
        <img src={LogoImage} alt="this is the logo" />
        </div>
    );
}
export default Logo;