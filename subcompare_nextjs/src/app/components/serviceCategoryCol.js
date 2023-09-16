import styles from '../home.module.css';
import ServiceCategoryItems from './serviceCategoryItems.js';

export default function ServiceCategoryColumn() {
    return (
        <div className={styles.eachCategoryContainer}>
            <div className={styles.eachTitleText}>Service Category</div>
            <ServiceCategoryItems />
        </div>
    );
}