import React from 'react'
import { FaHamburger, FaYoutube, FaFacebook, FaGithub } from 'react-icons/fa';
import Search from "./Search.jsx";
import "../styles/navbar.css";

const Navbar = () => {

    const [show, setShow] = React.useState(false);

    return (
        <>
            <nav className="bg-black text-white items-center justify-between md:justify-center w-full">
                <div className="flex md:justify-center justify-between md:gap-48 py-4 px-4 md:px-0 items-center">
                    <div className='gap-2 hidden md:flex'>
                        <FaFacebook className='cursor-pointer' />
                        <FaHamburger className='cursor-pointer' />
                        <FaYoutube className='cursor-pointer' />
                    </div>
                    <h2 className="text-4xl">Your Blogs</h2>
                    <Search cellphone={true} />
                    <div className='flex md:hidden'>
                        <FaHamburger className='cursor-pointer' onClick={() => setShow(!show)} />
                    </div>
                </div>
                <div className="separator"></div>
                <div className="w-full nav-down justify-center gap-12 items-center py-4 hidden md:flex">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/blogs">Blogs</a>
                    <a href="/contact">Contact</a>
                    <a href="/post">Post a Blog</a>
                </div>
                <Search cellphone={false} />
            </nav>
            {
                show && (
                    <div className='overlay top-0 left-0 bg-gray-950 text-white flex-col flex justify-center items-center gap-4'>
                        <div>
                            <b className='text-xl cursor-pointer' onClick={()=> setShow(!show)}>&times;</b>
                        </div>
                        <a onClick={()=> setShow(!show)} href="/">Home</a>
                        <a onClick={()=> setShow(!show)} href="/about">About</a>
                        <a onClick={()=> setShow(!show)} href="/blogs">Blogs</a>
                        <a onClick={()=> setShow(!show)} href="/contact">Contact</a>
                        <a onClick={()=> setShow(!show)} href="/post">Post a Blog</a>
                    </div>
                )
            }
        </>
    )
}

export default Navbar