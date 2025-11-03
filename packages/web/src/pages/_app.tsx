import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -8,
  },
};

// Transition settings
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Yatra+One&display=swap" rel="stylesheet" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="page-transition-wrapper"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
