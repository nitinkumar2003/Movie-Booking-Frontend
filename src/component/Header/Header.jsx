// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/button';
import { Film, User, Menu, X } from 'lucide-react'; // Import Menu and X icons

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="bg-background border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <Film className="h-6 w-6" />
                    <span className="text-xl font-bold">MovieMagic</span>
                </Link>
                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-4">
                    <Link to="/top100" className="text-sm font-medium hover:underline">
                        Top 100 Movies & Shows
                    </Link>
                    <Link to="/book" className="text-sm font-medium hover:underline">
                        Book Ticket
                    </Link>
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
                    <Link to="/top100" className="text-lg font-medium hover:underline" onClick={toggleMenu}>
                        Top 100 Movies & Shows
                    </Link>
                    <Link to="/book" className="text-lg font-medium hover:underline" onClick={toggleMenu}>
                        Book Ticket
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;