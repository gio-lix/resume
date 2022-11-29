import React from 'react';
import {Languages} from '../data'
import {Tools} from '../data'
import Bar from "../components/Bar";
import {motion} from "framer-motion"
import {fadeInUp, routeAnimation} from "../animations";
import Image from "next/image";
import {IMAGES} from "../public/images";
import Head from "next/head";


const Resume = () => {
    return (
        <>
            <Head>
                <title>Resume</title>
            </Head>
            <motion.div variants={routeAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit" className='p-4'>
                <div className=''>
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                    >
                        <h5 className='my-3 text-2xl font-bold text-center'>Education</h5>
                        <div>
                            <h5  className='my-2 text-xl font-semibold text-center'>ACADEMY OF DIGITAL INDUSTRIES: Node.JS</h5>
                            <p  className='my-2 text-xl font-semibold text-center'>GAU / GEOLAB: Javascript/React.JS </p>
                        </div>
                        <div className="w-full flex justify-between items-center h-56 mt-5">
                            <figure className="w-52 h-52">
                                <Image
                                    src={IMAGES.CV2}
                                    className="w-52 h-52 object-cover"
                                />
                            </figure>
                            <figure className="w-52 h-52">
                                <Image
                                    src={IMAGES.CV1}
                                    className="w-52 h-52 object-cover"
                                />
                            </figure>
                            <figure className="w-52 h-52">
                                <Image
                                    src={IMAGES.CV3}
                                    className="w-52 h-52 object-cover"
                                />
                            </figure>
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
        </>
    );
};

export default Resume;
