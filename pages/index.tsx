import type { NextPage } from 'next'
import {Services} from '../data'
import ServiceCart from "../components/ServiceCart";
import { motion } from "framer-motion";
import {fadeInUp, routeAnimation, stagger} from "../animations";
const Home: NextPage = () => {
  return (
    <>
        <motion.div variants={routeAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit" className='flex flex-col px-4 flex-grow'>
            <div className='h-10'>  </div>
            <div
                style={{marginLeft: "-1rem", marginRight: "-1rem"}}
                className='p-4 mt-4 bg-gray-400 dark:bg-black rounded-b-xl flex-grow'>
                <h6 className='my-1 tracking-wide font-bold'>What i offer</h6>
                <motion.div className='grid lg:grid-cols-2 gap-6' variants={stagger} initial="initial" animate='animate'>
                    {Services?.map(service => (
                        <motion.div
                            variants={fadeInUp} key={service.title}
                            className='lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg'>
                            <ServiceCart key={service.title} service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    </>
  )
}

export default Home
