import React from "react";
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

// Style
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Delivery</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
