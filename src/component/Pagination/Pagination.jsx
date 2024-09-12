import React from 'react';

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const getPageNumbers = () => {
        const pageNumbers = [];

        // Always show the first page
        if (totalPages > 1) {
            pageNumbers.push(1);
        }

        // Show the previous page if it's not the first page
        if (currentPage > 1) {
            pageNumbers.push(currentPage - 1);
        }

        // Always show the current page
        pageNumbers.push(currentPage);

        // Show the next page if it's not the last page
        if (currentPage < totalPages) {
            pageNumbers.push(currentPage + 1);
        }

        // Always show the last page if it's not already included
        if (totalPages > 1 && currentPage < totalPages) {
            pageNumbers.push(totalPages);
        }

        // Remove duplicates and sort
        return Array.from(new Set(pageNumbers));
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex items-center justify-center space-x-2 mt-4">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
            >
                Previous
            </button>

            {pageNumbers.map((page, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 border rounded-lg ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} hover:bg-blue-100`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
