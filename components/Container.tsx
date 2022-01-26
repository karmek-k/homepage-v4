import styles from '../styles/Container.module.css';

interface Props {
  children?: any;
}

export function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
