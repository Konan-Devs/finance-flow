// import './index.css'
import logo from '../assets/full logo.png'
import {Button} from '@headlessui/react'
import {NavLink} from 'react-router-dom'

function Navbar() {

    const links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Pricing', path: '/pricing'},
        {name: 'Tokens', path: '/tokens'},
        {name: 'Blog', path: '/blog'},
        {name: 'Contact Us', path: '/contact-us'}
    ]

    return(
        <nav className ="flex justify-between items-center py-8 px-30 bg-gray-950">
            <img src={logo} alt="Logo"/>

            <ul className = "flex gap-6">
                {links.map((link) => (
                    <li key={link.name}>
                        <NavLink 
                            to={link.path} 
                            className = {({ isActive }) =>
                            `relative text-white uppercase font-bold ease-in-out
                            after:absolute
                            after:left-0
                            after:-bottom-2
                            after:h-0.5
                            after:bg-white
                            after:transition-all
                            after:duration-300
                            ${isActive ? 'after:w-full' : 'after:w-0'}`
                        }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            

            <Button className = "bg-light-blue px-6 py-3 text-white uppercase font-bold rounded-full hover:bg-neutral-blue duration-300 ease-in-out cursor-pointer"> Download App</Button>

        </nav>
    )
}

    export default Navbar;