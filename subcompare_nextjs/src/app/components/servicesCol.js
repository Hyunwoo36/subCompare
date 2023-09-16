import styles from '../home.module.css';
import ServiceItems from './serviceItems.js';
export default function ServicesColumn() {
    return (
        <div className={styles.eachCategoryContainer}>
            <div className={styles.eachTitleText}>Services</div>
            <ServiceItems />
        </div>
    );
}