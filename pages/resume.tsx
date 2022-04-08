import React from 'react';
import {Languages} from '../data'
import {Tools} from '../data'
import Bar from "../components/Bar";
import {motion} from "framer-motion"
import {fadeInUp, routeAnimation} from "../animations";

const Resume = () => {
    return (
        <motion.div variants={routeAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit" className='p-4'>
            <div className='grid md:grid-cols-2 gap-6'>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className='my-3 text-2xl font-bold'>Education</h5>
                    <div>
                        <h5  className='my-2 text-xl font-semibold'>ACADEMY OF DIGITAL INDUSTRIES: Node.JS</h5>
                        <p  className='my-2 text-xl font-semibold'>GAU / GEOLAB: Javascript/React.JS </p>
                    </div>
                </motion.div>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
                <div>
                    <h5  className='my-3 text-2xl font-bold'>Languages & Frameworks</h5>
                    <div className='my-2'>
                        {Languages?.map(el => (
                            <Bar key={el.name} data={el} />
                        ))}
                    </div>
                </div>
                <div >
                    <h5  className='my-3 text-2xl font-bold'>Tools & SoftWares</h5>
                    <div className='my-2'>
                        {Tools?.map(tool => (
                            <Bar key={tool.name} data={tool} />
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Resume;
