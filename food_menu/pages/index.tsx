import type { NextPage } from 'next'
import Head from 'next/head'
import Buttons from '../components/Buttons'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="h-screen container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Buttons />
      <Content />

      <Footer />
    </div>
  )
}

export default Home
