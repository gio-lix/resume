import React, {useState} from 'react';
import {Projects as projects} from '../data'
import ProjectCart from "../components/Projectcart";
import ProjectsNavbar from "../components/ProjectsNavbar";
import {Category} from "../types";
import {motion} from 'framer-motion';
import {fadeInUp, routeAnimation, stagger} from "../animations";

const Projects = () => {
    const [showDetail, setShowDetail] = useState<number | null>(null)
    const [projectsItem, setProjectsItem] = useState(projects);
    const [active, setActive] = useState('all')

    const handleFilterCategory = (category: Category | 'all') => {
        if (category === "all") {
            setProjectsItem(projects)
            setActive(category)
            return
        }

        const newArray = projects.filter(el => el.category.includes(category))
        setProjectsItem(newArray)
        setActive(category)
    }
    return (
        <motion.div variants={routeAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit" className='py-2 px-5 overflow-y-scroll scrollbar-hide ' style={{height: '60vh'}}>
            <nav>
                <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active}/>
            </nav>
            <motion.div initial="initial" variants={stagger} animate='animate' className='grid grid-cols-12 gap-4 my-3 relative'>
                {projectsItem?.map(project => (
                    <motion.div variants={fadeInUp}  key={project.name} className='bg-gary-200  dark:bg-dark-200 rounded-lg col-span-12 sm:col-span-6 lg:col-span-4 p-2'>
                        <ProjectCart project={project} showDetail={showDetail} setShowDetail={setShowDetail}  />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
