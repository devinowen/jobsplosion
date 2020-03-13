import Head from 'next/head'
import Link from 'next/link'
import WordArt from 'react-wordart';
import { Tiles } from '@rebass/layout';

import Layout from '../components/Layout';

import styles from '../styles/home.module.scss';

const Home = () => (
  <Layout>
    <div className={styles['home-container']}>
      <Head>
        <title>jobSPLOSION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1 className={styles['title']}>
            Welcome to <WordArt text='jobSPLOSION' theme={`rainbow`} fontSize={50} />
          </h1>

          <h3 className={styles['description']}>
            Get a job the way your&nbsp;&nbsp;<WordArt text='dad' theme={`purple`} fontSize={32} />&nbsp;&nbsp;did when&nbsp;&nbsp;<WordArt text='he was your age.' theme={`slate`} fontSize={28} />
          </h3>
        </div>

        <div className={styles['actions-container']}>
          <Tiles columns={[2, null, 4]}>
            <Link href="/find">
              <a>
                <h3>Find a job &rarr;</h3>
                <p>Check the classifieds in your local paper.</p>
              </a>
            </Link>

            <Link href="/resume">
              <a>
                <h3>Write a resume &rarr;</h3>
                <p>Write up a quick summary in Word. Don't worry about describing everything, they'll ask you in person.</p>
              </a>
            </Link>

            <Link
              href="/cover-letter"
            >
              <a>
                <h3>Write a cover letter &rarr;</h3>
                <p>Make sure they really know how <em>badly</em> you want the job.</p>
              </a>
            </Link>

            <Link
              href="/apply"
            >
              <a>
                <h3>Apply &rarr;</h3>
                <p>Go in person so that you can shake your soon-to-be-manager's hand.</p>
              </a>
            </Link>
          </Tiles>
        </div>

        <div>
          <h2 className={styles['easy']}>
            It's that <WordArt text='easy!' theme={`superhero`} fontSize={45} />
          </h2>
        </div>
      </main>

      <footer>
        <a
          href="https://savviest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️by your friendly neighborhood &rsquo;splosioners
        </a>
      </footer>
    </div>
  </Layout>
)

export default Home
