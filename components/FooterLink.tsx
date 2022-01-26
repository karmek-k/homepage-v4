import styles from '../styles/FooterLink.module.css';

interface Props {
  href: string;
}

export function FooterLink({ href }: Props) {
  return (
    <div className={styles.container}>
      <a href={href} className={styles.link}>
        Page source code
      </a>
    </div>
  );
}
