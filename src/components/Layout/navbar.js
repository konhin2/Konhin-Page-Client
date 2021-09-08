import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import largeLogo from './../../Images/large_icon.png'

export default function Navbar() {
    // HOOKs
    const [navigation, setNavigation] = useState('home')
    const [hidden, setHidden] = useState(true)
    // FUNCTIONS
    const changePage = (event) => {
        switch (event.target.name) {
            case 'home':
                return setNavigation('home')
            case 'projects':
                return setNavigation('projects')
            case 'skills':
                return setNavigation('skills')
            case 'about':
                return setNavigation('about')
            default:
                break;
        }
    }
    const hiddenMovile = (event) => {
        setHidden(!hidden)
    }
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex px-2 lg:px-0">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-11 w-auto" src={largeLogo} alt="Small Logo" />
                            <div className="flex flex-column items-center">
                                <img className="hidden lg:block h-11 w-auto" src={largeLogo} alt="Large Logo" />
                                <p className="text-xl font-semibold mx-3 tracking-tighter">K'onhin C.</p>
                            </div>
                        </div>
                        <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                            {
                                navigation === "home" ?
                                    (
                                        <Link to="/" className="border-k-c1 text-gray-900 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium">
                                            Home
                                        </Link>
                                    ) :
                                    (
                                        <Link to="/" name="home" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium" onClick={(e) => changePage(e)}>
                                            Home
                                        </Link>
                                    )
                            }
                            {
                                navigation === "projects" ?
                                    (
                                        <Link to="/projects" className="border-k-c1 text-gray-900 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium">
                                            Projects
                                        </Link>
                                    ) :
                                    (
                                        <Link to="/projects" name="projects" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium" onClick={(e) => changePage(e)}>
                                            Projects
                                        </Link>
                                    )
                            }
                            {
                                navigation === "skills" ?
                                    (
                                        <Link to="/skills" className="border-k-c1 text-gray-900 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium">
                                            Skills
                                        </Link>
                                    ) :
                                    (
                                        <Link to="/skills" name="skills" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium" onClick={(e) => changePage(e)}>
                                            Skills
                                        </Link>
                                    )
                            }
                            {
                                navigation === "about" ?
                                    (
                                        <Link to="/about" className="border-k-c1 text-gray-900 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium">
                                            About me
                                        </Link>
                                    ) :
                                    (
                                        <Link to="/about" name="about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium" onClick={(e) => changePage(e)}>
                                            About me
                                        </Link>
                                    )
                            }
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-k-c5 focus:border-k-c5 sm:text-sm" placeholder="Search Project" type="search" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-k-c4" aria-controls="mobile-menu" aria-expanded="false" onClick={(e) => hiddenMovile(e)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {
                hidden ?
                    null
                    :
                    (
                        <div className="lg:hidden" id="mobile-menu" onMouseLeave={(e) => hiddenMovile(e)}>
                            <div className="pt-2 pb-3 space-y-1">
                                {
                                    navigation === "home" ?
                                        (
                                            <Link to="/" className="bg-purple-50 border-k-c2 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</Link>
                                        ) :
                                        (
                                            <Link to="/" name="home" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={(e) => changePage(e)}>Home</Link>
                                        )
                                }
                                {
                                    navigation === "projects" ?
                                        (
                                            <Link to="/projects" className="bg-purple-50 border-k-c2 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</Link>
                                        ) :
                                        (
                                            <Link to="/projects" name="projects" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={(e) => changePage(e)}>Projects</Link>
                                        )
                                }
                                {
                                    navigation === "skills" ?
                                        (
                                            <Link to="/skills" className="bg-purple-50 border-k-c2 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Skills</Link>
                                        ) :
                                        (
                                            <Link to="/skills" name="skills" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={(e) => changePage(e)}>Skills</Link>
                                        )
                                }
                                {
                                    navigation === "about" ?
                                        (
                                            <Link to="/about" className="bg-purple-50 border-k-c2 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About me</Link>
                                        ) :
                                        (
                                            <Link to="/about" name="about" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={(e) => changePage(e)}>About me</Link>
                                        )
                                }
                            </div>
                        </div>
                    )
            }
        </nav>
    )
}
