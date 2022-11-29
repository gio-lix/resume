import {fadeInUp, routeAnimation, stagger} from "../animations";
import {motion} from 'framer-motion';
import {GamesData } from "../data"
import React, {useState} from "react";
import ProjectCart from "../components/Projectcart";

const All = () => {
    const [showDetail, setShowDetail] = useState<number | null>(null)

    return (
        <motion.div variants={routeAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit" className='py-2 px-5 overflow-y-scroll scrollbar-hide border-t-8 border-dark-500' style={{height: '70vh'}}>
            <nav>
                {/*<ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active}/>*/}
            </nav>
            <motion.div  initial="initial" variants={stagger} animate='animate'
                         className='grid grid-cols-12 gap-4 my-3  relative'>
                {GamesData?.map(project => (
                    <motion.div variants={fadeInUp}  key={project.name}
                                className='bg-indigo-50  dark:bg-dark-200 rounded-lg col-span-12 sm:col-span-6 lg:col-span-4 p-2'>
                        <ProjectCart project={project} showDetail={showDetail} setShowDetail={setShowDetail}  />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
export default All