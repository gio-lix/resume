import React, {FC} from 'react';
import {ISkill} from "../types";
import {motion} from "framer-motion"

const Bar: FC<{data:ISkill }> = ({data: {level,name,Icon}}) => {
    const bar_width = `${level}`
    const variants = {
        initial: {
            width: 0
        },
        animate: {
            width: bar_width,
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    }
    return (
        <div className='text-white my-2  dark:bg-gray-600 bg-gray-300 rounded-full'>
            <motion.div
                style={{width: bar_width}}
                variants={variants}
                initial="initial"
                animate="animate"
                className="px-4 py-1 flex items-center rounded-full bg-green-600">

                <Icon className='mr-3'/> {name}
            </motion.div>
        </div>
    );
};

export default Bar;
