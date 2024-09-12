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
        pageNumbers.push(1);

        // Show the second page if not the first
        if (totalPages > 1 && currentPage > 3) {
            pageNumbers.push(2);
        }

        // Show the previous page if it exists
        if (currentPage > 1) {
            pageNumbers.push(currentPage - 1);
        }

        // Always show the current page
        pageNumbers.push(currentPage);

        // Show the next page if it exists
        if (currentPage < totalPages) {
            pageNumbers.push(currentPage + 1);
        }

        // Always show the last page if not already shown
        if (totalPages > 2 && currentPage < totalPages - 2) {
            pageNumbers.push(totalPages);
        }

        // Remove duplicates and sort
        return Array.from(new Set(pageNumbers)).sort((a, b) => a - b);
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

            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 border rounded-lg ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'} hover:bg-blue-100`}
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
