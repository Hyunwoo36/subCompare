import styles from '../home.module.css';
import DetailItems from './detailItems.js';

export default function DetailsColumn() {
    return (
        <div className={styles.eachCategoryContainer}>
            <div className={styles.eachTitleText}>Additional Details</div>
            <DetailItems />
        </div>
    )
}