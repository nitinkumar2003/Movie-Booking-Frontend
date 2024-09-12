import React, { useState } from 'react';
import { motion } from 'framer-motion';; // Make sure you have this hook implemented
import Pagination from '../component/Pagination/Pagination';
import Layout from '../component/Layout/Layout';
import { Button } from '../component/ui/Ui';
import usePush from '../hooks/usePush';

// Mock data for demonstration
const top100Movies = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  image: `/placeholder.svg?height=400&width=300&text=Movie+${i + 1}`
}));

const top100Shows = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `TV Show ${i + 1}`,
  image: `/placeholder.svg?height=400&width=300&text=TV+Show+${i + 1}`
}));

const itemsPerPage = 10;

const Top100Page = () => {
  const [activeTab, setActiveTab] = useState('movies');
  const [currentPage, setCurrentPage] = useState(1);
  const push = usePush();

  const items = activeTab === 'movies' ? top100Movies : top100Shows;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleViewClick = (id) => {
    push(`/t100/${id}`);
  };

  return (
    <Layout id='2'>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Top 100 Entertainment</h1>

        <div className="flex justify-center space-x-4 mb-6">
          <Button
            onClick={() => setActiveTab('movies')}
            className={`px-4 py-2 border rounded-lg ${activeTab === 'movies' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} hover:bg-blue-100`}
          >
            Top 100 Movies
          </Button>
          <Button
            onClick={() => setActiveTab('shows')}
            className={`px-4 py-2 border rounded-lg ${activeTab === 'shows' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} hover:bg-blue-100`}
          >
            Top 100 Shows
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative border rounded-lg overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  onClick={() => handleViewClick(item.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
                >
                  View
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm truncate">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Layout>
  );
};

export default Top100Page;
