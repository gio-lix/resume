import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {AnimatePresence} from "framer-motion";
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <ThemeProvider attribute='class'>
          <div className='grid grid-cols-12 gap-6 px-5 my-6 lg:px-28 sm:px-14 md:px-20'>
              <div className='lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg col-span-12 text-center px-2 shadow-2xl  shadow-black/80 '>
                  <Sidebar />
              </div>
              <div className='lg:col-span-9 bg-white col-span-12 flex flex-col dark:bg-gray-800 rounded-xl shadow-2xl  shadow-black/80 '>
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
