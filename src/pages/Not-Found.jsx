import { Home, } from 'lucide-react'
import Layout from '../component/Layout/Layout';
import { useNavigateTo } from '../hooks/CustomHooks';
const NotFound = () => {
    const navigateToSomePath = useNavigateTo('/');
    return (
        <Layout>

            <div className="flex flex-col items-center justify-center max-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Oops! Page not found</p>
                    <div className="mb-8">
                        <svg className="w-64 h-64 mx-auto text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"  >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <a onClick={navigateToSomePath}
                        className="inline-flex cursor-pointer items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Go back home
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default NotFound;