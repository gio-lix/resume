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
        if (pathname === '/games' ) setActive('games')
    }, [])
    return (
     <>
        <div className='flex justify-between px-5 py-3 my-3 '>
            <span className='font-bold text-green-400   text-lg border-b-4'>{active}</span>
            <div className='font-lg flex space-x-4'>
                <NavItem active={active} setActive={setActive} name='About' route='/' />
                <NavItem active={active} setActive={setActive} name='Projects' route='/projects' />
                <NavItem active={active} setActive={setActive} name='Resume' route='/resume' />
                <NavItem active={active} setActive={setActive} name='games' route='/games' />
            </div>
        </div>
     </>
  )
}
export default Navbar