import styles from '../styles/AsciiHeader.module.css';

export function AsciiHeader() {
  const ascii = `
██   ██  █████  ██████  ███    ███ ███████ ██   ██      ██   ██ 
██  ██  ██   ██ ██   ██ ████  ████ ██      ██  ██       ██  ██  
█████   ███████ ██████  ██ ████ ██ █████   █████  █████ █████   
██  ██  ██   ██ ██   ██ ██  ██  ██ ██      ██  ██       ██  ██  
██   ██ ██   ██ ██   ██ ██      ██ ███████ ██   ██      ██   ██ 
  `.trim();

  return (
    <h1 className={styles.header}>
      <pre className={styles.pre}>{ascii}</pre>
    </h1>
  );
}
