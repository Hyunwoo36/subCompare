import styles from '../home.module.css';

export default function CategoryTitles() {
    return (
        <div className={styles.categoryContainer}>
            <div className={`${styles.bold} ${styles.fontLarger}`}>Service Category</div>
            <div className={`${styles.bold} ${styles.fontLarger}`}>Services</div>
            <div className={`${styles.bold} ${styles.fontLarger}`}>Cheapest Prices / month</div>
            <div className={`${styles.bold} ${styles.fontLarger}`}>Additional Details</div>
        </div>
    )
}