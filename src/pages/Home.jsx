// src/pages/Home.js
import React from 'react';
import Layout from '../component/Layout/Layout';
import Button from '../component/ui/button';
import Input from '../component/ui/input';
import { Ticket } from 'lucide-react';
import UpcomingMovies from '../component/UpcommingMovie/UpcomingMovies';

const Home = () => {
    return (
        <Layout id='1'>
            <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 flex-grow">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Experience Movie Magic</h1>
                    <p className="text-xl mb-8">Book your tickets now for the latest blockbusters!</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Input
                            type="text"
                            placeholder="Search for movies..."
                            className="max-w-xs bg-white text-black"
                        />
                        <Button size="lg">
                            <Ticket className="h-4 w-4 mr-2" />
                            Book Now
                        </Button>
                    </div>
                </div>
            </section>
            <section>
                <UpcomingMovies />
            </section>
        </Layout>
    );
};

export default Home;
