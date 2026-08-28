import styles from './styles.module.css';

type MenuItemProps = {
    children: React.ReactNode
} & React.ComponentProps<'a'>

export function MenuItem({ children, ...props }: MenuItemProps) {
    return (
        <a href='#' className={styles['menu-item-link']} {...props}>
            {children}
        </a>
    );
}