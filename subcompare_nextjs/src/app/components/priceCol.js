import styles from '../home.module.css';
import PriceColumnItems from './priceColItems.js';
export default function PriceColumn() {
    return (
        <div className={styles.eachCategoryContainer}>
            <div className={styles.eachTitleText}>Cheapest Prices / Month</div>
            <PriceColumnItems />
        </div>
    )
}