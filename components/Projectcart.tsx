import React, {FC, useEffect, useRef} from 'react';
import {IProject} from "../types";
import Link from 'next/link'
import {AiFillProject} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {MdClose} from "react-icons/md";
import Image from "next/image";
import {motion} from 'framer-motion';
import {fadeInUp, stagger} from "../animations";

const ProjectCart: FC<{
    project: IProject,
    setShowDetail: (id: number | null) => void;
    showDetail: number | null
}> = ({
          project: {
              name,
              image_url,
              category,
              github_url,
              deploy_url,
              description,
              key_techs,
              id
          },
          setShowDetail,
          showDetail
      }) => {


    return (
        <div>
            <Image
                width={300}
                height={150}
                layout='responsive'
                quality='100'
                onClick={() => setShowDetail(id)}
                src={image_url}
                alt={name}
                className='cursor-pointer object-contain'
            />
            <p className='my-2 text-center'>{name}</p>
            {showDetail === id && (
                <motion.div
                    className='fixed shadow-2xl top-[20%] -translate-x-[50%] left-[50%]  z-20 grid md:grid-cols-2 p-2 border border-gray-300 dark:border-gray-600
                    h-auto w-[70%] md:w-[60%] gap-x-12 dark:text-white dark:bg-dark-100  text-black bg-indigo-100 '
                >
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div variants={fadeInUp}>
                            <Image width={300}
                                   height={180}
                                   layout='responsive'
                                   quality='100' src={image_url} alt={name}
                                   className="object-contain h-full"
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex flex-col justify-between" variants={stagger} initial="initial" animate="animate">
                        <motion.div variants={fadeInUp}>
                            <h2  className='mb-3 text-xl text-center md:text-left font-medium md:text-2xl'>{name}</h2>
                            <h3 className='mb-3 text-center md:text-left font-medium'>{description}</h3>
                        </motion.div>
                        <motion.div variants={fadeInUp} className='flex justify-center  md:justify-start flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                            {key_techs.map(tech => (
                                <span className='px-2 py-1  my-1 bg-white dark:bg-dark-200 rounded' key={tech}>{tech}</span>
                            ))}
                        </motion.div>
                        {/*check*/}
                        <motion.div variants={fadeInUp} className='flex justify-center  md:justify-start my-4 space-x-3'>
                            <Link passHref href={github_url}>
                                <a target="_blank" className='flex items-center px-4 py-2 space-x-3 text-lg bg-white dark:bg-dark-200'>
                                    <AiFillGithub /> <span>Github</span>
                                </a>
                            </Link>
                            <Link passHref href={deploy_url}>
                                <a target="_blank" className='flex items-center px-4 py-2 space-x-3 text-lg bg-white dark:bg-dark-200'>
                                    <AiFillProject /> <span>project</span>
                                </a>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <button
                        className='absolute top-3 right-3 rounded-full p-1 outline-none bg-gray-200 dark:bg-dark-200'
                        onClick={() => setShowDetail(null)} >
                        <MdClose size={30} />
                    </button>
                </motion.div>
            )}

        </div>
    );
};

export default ProjectCart;
