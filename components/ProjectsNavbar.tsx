import React, {FC} from 'react';
import {Category} from '../types'



export const NavItem: FC<{value: Category | 'all', handleFilterCategory:Function, active:string}> = ({value,handleFilterCategory,active}) => {

    let className = 'cursor-pointer hover:text-green-400 capitalize '
    if (active === value) className += 'text-green-500'
    return (
        <li onClick={() => handleFilterCategory(value)}
            className={className}>
            {value}
        </li>
    );
};



const ProjectNavbar = (props: any) => {
    return (
        <div className='flex space-x-3 px-3 py-1 list-none overflow-x-auto '>
            <NavItem value='all' {...props}/>
            <NavItem value='react' {...props}/>
            <NavItem value='next' {...props}/>
            {/*<NavItem value='nest' {...props}/>*/}
            {/*<NavItem value='strapi' {...props}/>*/}
        </div>
    );
};

export default ProjectNavbar;