import logo from '../assets/full logo.png'
import ig from '../assets/insta.png'
import fb from '../assets/facebook.png'
import linkedin from '../assets/linked in.png'
import apple from '../assets/apple store.png'
import play from '../assets/play store.png'
import {Button} from '@headlessui/react'
import {NavLink} from 'react-router-dom'

function Footer () {

    const links = [
        {name:'Home', path: '/'},
        {name:'About', path: '/about'},
        {name:'Pricing', path: '/pricing'},
        {name:'Tokens', path: '/tokens'},
        {name:'Blog', path: '/blog'},
        {name:'Contact Us', path: '/contact-us'}
    ]


    return(
        <main className='pt-20 pb-30 px-26 bg-neutral-blue relative bottom-0 gap-10 flex flex-col'>
            <div className='flex px-4 py-4 items-start justify-between w-full'>

                <div className='flex flex-col items-start gap-12 '>
                    <img src= {logo} alt='logo' className='w-auto h-auto'/>

                    <div className='w-full flex flex-col gap-6'>
                        <h1 className='text-md font-semibold uppercase text-white'>Menu</h1>

                        <ul className='grid grid-cols-2 border-t border-white/80 py-8 gap-y-2 gap-x-8'>
                            {links.map((link) =>(
                                <li key={link.name}>
                                    <NavLink
                                    to={link.path}
                                    className={({isActive}) => `text-white font-light uppercase text-md ${isActive ? 'font-extrabold' : 'font-light'}`
                                    }       
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>

                <div className='flex flex-col items-end gap-10'>
                    <div className='flex gap-4 items-center'>
                        <img src= {ig} alt='' className='w-auto h-auto'/>
                        <img src= {fb} alt='' className='w-auto h-auto'/>
                        <img src= {linkedin} alt='' className='w-auto h-auto'/>
                    </div>

                    <div className='px-8 py-7 bg-white/10 flex flex-col items-start gap-6 w-[80%] rounded-2xl'>
                        <h1 className='text-white font-bold text-xl uppercase'>download our app</h1>
                        <p className='text-white text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet commodi sunt molestiae!</p>

                        <div className='flex items-center gap-8'>
                            <Button className='bg-light-blue hover:bg-neutral-blue duration-300 pointer-cursor flex gap-4 px-6 py-3 items-center rounded-full'>
                                <img src={apple} alt='apple logo' className='w-auto h-auto'/>
                                <p className='text-white/90 font-light font-xl uppercase'>App store</p>
                            </Button>

                            <Button className='bg-light-blue hover:bg-neutral-blue duration-300 pointer-cursor flex gap-4 px-6 py-3 items-center rounded-full'>
                                <img src={play} alt='playstore logo' className='w-auto h-auto'/>

                                <p className='text-white/90 font-light font-xl uppercase'>PLay store</p>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='border-t w-full border-white/60'></div>
            
            <div className='text-white flex items-center justify-between'>
                <p>All right reserved</p>
                <p>Made by KONAN</p>
            </div>

        </main>
    )
};


export default Footer;