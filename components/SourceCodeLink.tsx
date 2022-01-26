import styles from '../styles/SourceCodeLink.module.css';

export function SourceCodeLink() {
  return (
    <div className={styles.container}>
      <a
        href="//github.com/karmek-k/homepage-v4"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        Page source code
      </a>
    </div>
  );
}
