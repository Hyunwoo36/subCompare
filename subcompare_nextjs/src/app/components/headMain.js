import styles from '../home.module.css';

export default function HeadMain() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Welcome to<span className={`${styles.bold} ${styles.marginLeft}`}> SubCompare!</span></div>
            <div className={styles.subTitle}>Dive into real-time comparisons of your favorite subscription services. From streaming platforms to fitness memberships, we offer the most up-to-date prices to help you make informed choices.</div>
        </div>
    )
}