import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brian Blankenship</title>
        <meta name="description" content="A portfolio for Brian Blankenship" />
      </Head>
    </div>
  )
}
