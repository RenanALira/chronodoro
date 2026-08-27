import styles from "./styles.module.css";

export function Cycles() {
    return (
        <div className={styles['cycles-container']}>
            <span>Cycles</span>

            <div className={styles['cycle-dots']}>
                <span className={`${styles['cycle-dot']} ${styles['cycle-dot-work-time']}`}></span>
                <span className={`${styles['cycle-dot']} ${styles['cycle-dot-short-break-time']}`}></span>
                <span className={`${styles['cycle-dot']} ${styles['cycle-dot-work-time']}`}></span>
                <span className={`${styles['cycle-dot']} ${styles['cycle-dot-short-break-time']}`}></span>
                <span className={`${styles['cycle-dot']} ${styles['cycle-dot-work-time']}`}></span>
                <span className={`${styles['cycle-dot']} ${styles['cycle-dot-short-break-time']}`}></span>
                <span className={`${styles['cycle-dot']} ${styles['cycle-dot-work-time']}`}></span>
                <span className={`${styles['cycle-dot']} ${styles['cycle-dot-long-break-time']}`}></span>
            </div>
        </div>
    )
}