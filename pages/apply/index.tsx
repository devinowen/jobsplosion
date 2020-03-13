import Layout from '../../components/Layout';
import styles from './apply.module.scss';

const Apply = () => (
  <Layout>
    <div className={styles['text-container']}>
      <h2>We get it.</h2>

      <h2>Getting a job isn't as easy as Dad thinks it is.</h2>

      <h2>Luckily, there's <a href="https://savviest.com">Savviest</a>.</h2>
    </div>
  </Layout>
);

export default Apply;