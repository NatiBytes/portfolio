import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="google-site-verification" content="TIUrkchOlm9fPiQ_hEfy-3--R5cBqUlVtCsHjhS6tkI" />
        
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://natnaelgebremichael.com">Natnael Gebremichael.com!</a>
          <br></br>
          Read <Link href="/posts/firstpost">this page!</Link>
        </h1>

        <p className={styles.description}>
          This Page is under construction
          
        </p>

      </main>

         </div>
  )
}
