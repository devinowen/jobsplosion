import Link from 'next/link';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';
import styles from './Layout.module.scss';

const Layout = (props: any) => (
  <ThemeProvider theme={theme}>
    <div className={styles.header}>
      <Link href="/"><img className={styles.logo} src="/jobsplosion_logo.png" /></Link>
    </div>
    {props.children}
  </ThemeProvider>
);

export default Layout;