// components/Layout.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-background shadow-md">
                <Header />
            </header>
            {/* 
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main> */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            {/* <footer className="bg-background border-t py-4"> */}
            <Footer />
            {/* </footer> */}
        </div>
    );
}
