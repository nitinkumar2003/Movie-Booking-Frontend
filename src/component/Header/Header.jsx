// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, User, Menu, X } from 'lucide-react'; // Import Menu and X icons
import { $navLinks } from '../../utils/Constant';
import { Button } from '../ui/Ui'
import { useNavigateTo, usePush } from '../../hooks/CustomHooks';

const Header = ({ id }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const handleNavigateTo=useNavigateTo()
   
    const toggleMenu = () => setMenuOpen(!menuOpen);

    

    return (
        <header className="bg-white border-b sticky top-0 z-50 h-16"> {/* Fixed height */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between h-full">
                <Link to="/" className="flex items-center space-x-2">
                    <Film className="h-6 w-6" />
                    <span className="text-xl font-bold">NK-PVR</span>
                </Link>
                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-4">
                    <NavLinks id={id} />
                </nav>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button variant="outline" size="sm" onClick={toggleMenu}>
                        {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </div>
                {/* Login Button */}
                <div className="hidden md:block">
                    <Button variant="outline" size="sm">
                        <User className="h-4 w-4 mr-2" />
                        Login
                    </Button>
                </div>
            </div>
            {/* Mobile Menu Links */}
            <div className={`fixed inset-0 bg-white z-40 md:hidden transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}>
                <div className="flex justify-end p-4">
                    <Button variant="outline" size="sm" onClick={toggleMenu}>
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="flex flex-col items-center space-y-4 mt-8">
                    <NavLinks id={id} />
                </nav>
            </div>
        </header>
    );
};


const NavLinks = ({ id }) => {
    const push = usePush()

    return $navLinks.map((item, index) => {
        return <>
            <a to="/top100" onClick={()=>push(item.route)} className={`text-sm font-medium cursor-pointer ${item.id === id ? 'text-blue-600 underline' : 'text-gray-900 hover:underline'}`}>{item.label}</a>
        </>
    })
}


export default Header;
