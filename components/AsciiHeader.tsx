import styles from '../styles/AsciiHeader.module.css';

export function AsciiHeader() {
  const ascii = `
██   ██  █████  ██████  ███    ███ ███████ ██   ██      ██   ██ 
██  ██  ██   ██ ██   ██ ████  ████ ██      ██  ██       ██  ██  
█████   ███████ ██████  ██ ████ ██ █████   █████  █████ █████   
██  ██  ██   ██ ██   ██ ██  ██  ██ ██      ██  ██       ██  ██  
██   ██ ██   ██ ██   ██ ██      ██ ███████ ██   ██      ██   ██ 
  `.trim();

  const ariaAttrs = {
    'aria-label': 'karmek-k'
  };

  return (
    <h1 className={styles.header} {...ariaAttrs}>
      <pre className={styles.pre}>{ascii}</pre>
    </h1>
  );
}
