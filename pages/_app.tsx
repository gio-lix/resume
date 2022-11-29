import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {AnimatePresence} from "framer-motion";
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <ThemeProvider attribute='class'>
          <div className='bg-indigo-50 dark:bg-black
           h-screen py-10 grid  grid-cols-12 gap-10 px-5  lg:px-28 sm:px-14 md:px-20'>
              <div className='lg:col-span-4 bg-white dark:bg-gray-800 rounded-lg col-span-12 text-center px-2 shadow-2xl  shadow-black/80 '>
                  <Sidebar />
              </div>
              <div className='lg:col-span-8 bg-white col-span-12 flex flex-col dark:bg-gray-800 rounded-xl shadow-2xl  shadow-black/80 '>
                  <Navbar />
                  <AnimatePresence exitBeforeEnter>
                      <Component {...pageProps} key={router.route} />
                  </AnimatePresence>
              </div>
          </div>
      </ThemeProvider>
  )
}

export default MyApp
