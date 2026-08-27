import styles from './styles.module.css';

type DefaultInputProps = {
    label?: string
} & React.ComponentProps<'input'>

export function DefaultInput({ type, label, id, ...rest }: DefaultInputProps) {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} id={id} className={styles['default-input']} {...rest} />
        </>
    );
}