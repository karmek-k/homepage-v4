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
    <>
      <h1 className={styles.a11y}>karmek-k</h1>
      <pre className={styles.header}>{ascii}</pre>
    </>
  );
}
