import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from "react-icons/go";
import {GiTie} from "react-icons/gi";
import Link from 'next/link'
import {useTheme} from "next-themes";


const Sidebar = () => {
    const { theme, setTheme } = useTheme()
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
  return (
     <>
        <div>
            <div className='h-28 flex flex-col justify-center'>
                <p>Giorgi</p>
                <p>Mosemgvdlishvili</p>
            </div>
            <p className='px-2 py-1 my-3 bg-gray-200 dark:bg-gray-600 '>Web Developer</p>
            <div className='flex justify-around my-5 text-green-300 w-9/12 md:w-full'>
                <Link href='https://github.com/gio-lix'  >
                    <a download='name' className='flex items-center'>
                        <AiFillGithub className='w-6 h-6' />
                    </a>
                </Link>
                <Link href='https://www.linkedin.com/in/gio-mosemgvdlishvili-757b42106' >
                    <a>
                        <AiFillLinkedin className='w-6 h-6' />
                    </a>
                </Link>
            </div>
            <div className='dark:bg-gray-600 wy-5 py-4 bg-gray-200' style={{marginLeft: "-0.5rem", marginRight: "-0.5rem"}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Tbilisi, Georgia</span>
                </div>
                <p className='my-2 text-sm'>gmosemgvdlishvili28@gmail.com</p>
                <p className='TEL: my-2 text-sm'>+995 595 55 28 64</p>
            </div>
            <div className='flex flex-col items-center my-4'>
                <button className='  bg-green-600 w-8/12 rounded-full py-1 px-5 text-white my-2'
                        onClick={() => window.open('mailto:gmosemgvdlishvili28@gmail.com')}
                >Email Me</button>
                <button onClick={changeTheme} className='bg-green-600 w-8/12 rounded-full py-1 px-5 text-white my-2 whitespace-nowrap'>Toggle Theme</button>
            </div>
        </div>
     </>
  )
}
export default Sidebar
