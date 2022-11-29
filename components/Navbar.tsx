import {FC, useEffect, useState} from "react"
import Link from 'next/link'
import {useRouter} from "next/router";

const NavItem: FC<{
    active: string,
    setActive: Function,
    name: string,
    route: string

}> = ({active, setActive, name, route}) => {
    return (
        active !== name ? (
            <Link href={route} >
                <a onClick={() => setActive(name)} className='hover:text-green-400' >
                    {name}
                </a>
            </Link>
        ) : null
    )
}

const Navbar = () => {
    const [active, setActive] = useState<string>('');
    const {pathname} = useRouter()

    useEffect(() => {
        if (pathname === '/' ) setActive('about')
        if (pathname === '/projects' ) setActive('projects')
        if (pathname === '/resume' ) setActive('resume')
        if (pathname === '/all' ) setActive('all')
    }, [])
    return (
     <>
         <span className='font-bold text-green-400  text-center  text-lg border-b-2 pb-1 m-2'>{active}</span>
         <div className='flex justify-center  px-5 py-3 my-3 '>
            <div className='font-lg flex space-x-4'>
                <NavItem active={active} setActive={setActive} name='About' route='/' />
                <NavItem active={active} setActive={setActive} name='Projects' route='/projects' />
                <NavItem active={active} setActive={setActive} name='Resume' route='/resume' />
                <NavItem active={active} setActive={setActive} name='all' route='/all' />
            </div>
        </div>
     </>
  )
}
export default Navbar