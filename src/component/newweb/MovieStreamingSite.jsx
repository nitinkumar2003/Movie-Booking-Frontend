import React from 'react';
import { MovieCard } from './MovieCard';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { Play } from 'lucide-react';

const MovieStreamingSite = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-gray-900 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">MovieMax</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-red-600">Home</a>
          <a href="#" className="hover:text-red-600">Movies</a>
          <a href="#" className="hover:text-red-600">TV Shows</a>
          <a href="#" className="hover:text-red-600">My List</a>
        </nav>
        <Button variant="ghost">Sign In</Button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="relative mb-12">
          <img 
            src="/placeholder.svg?height=400&width=800&text=John+Wick+3:+Parabellum" 
            alt="John Wick 3: Parabellum" 
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center p-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">John Wick 3: Parabellum</h2>
              <Button className="bg-red-600 hover:bg-red-700">
                <Play className="w-4 h-4 mr-2" /> Play Now
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionTitle title="Featured Movies" seeAll />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <MovieCard title="Stranger Things" rating="8.7" image="/placeholder.svg?height=200&width=150&text=Stranger+Things" />
            <MovieCard title="The Witcher" rating="8.2" image="/placeholder.svg?height=200&width=150&text=The+Witcher" />
            <MovieCard title="Inception" rating="8.8" image="/placeholder.svg?height=200&width=150&text=Inception" />
            <MovieCard title="The Dark Knight" rating="9.0" image="/placeholder.svg?height=200&width=150&text=The+Dark+Knight" />
            <MovieCard title="Interstellar" rating="8.6" image="/placeholder.svg?height=200&width=150&text=Interstellar" />
          </div>
        </section>

        <section className="mb-12">
          <SectionTitle title="New Arrivals" seeAll />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <MovieCard title="Dune" rating="8.0" image="/placeholder.svg?height=200&width=150&text=Dune" />
            <MovieCard title="No Time to Die" rating="7.3" image="/placeholder.svg?height=200&width=150&text=No+Time+to+Die" />
            <MovieCard title="Black Widow" rating="6.7" image="/placeholder.svg?height=200&width=150&text=Black+Widow" />
            <MovieCard title="Shang-Chi" rating="7.4" image="/placeholder.svg?height=200&width=150&text=Shang-Chi" />
            <MovieCard title="Free Guy" rating="7.1" image="/placeholder.svg?height=200&width=150&text=Free+Guy" />
          </div>
        </section>

        <section className="mb-12">
          <SectionTitle title="Exclusive Videos" seeAll />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative">
              <img src="/placeholder.svg?height=200&width=350&text=Trailer+1" alt="Trailer 1" className="w-full h-48 object-cover rounded-lg" />
              <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-75" />
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=200&width=350&text=Trailer+2" alt="Trailer 2" className="w-full h-48 object-cover rounded-lg" />
              <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-75" />
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=200&width=350&text=Trailer+3" alt="Trailer 3" className="w-full h-48 object-cover rounded-lg" />
              <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-75" />
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Featured Cast" seeAll />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="text-center">
              <img src="/placeholder.svg?height=150&width=150&text=Actor+1" alt="Actor 1" className="w-24 h-24 mx-auto rounded-full object-cover mb-2" />
              <p className="font-semibold">Actor Name</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=150&width=150&text=Actor+2" alt="Actor 2" className="w-24 h-24 mx-auto rounded-full object-cover mb-2" />
              <p className="font-semibold">Actor Name</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=150&width=150&text=Actor+3" alt="Actor 3" className="w-24 h-24 mx-auto rounded-full object-cover mb-2" />
              <p className="font-semibold">Actor Name</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=150&width=150&text=Actor+4" alt="Actor 4" className="w-24 h-24 mx-auto rounded-full object-cover mb-2" />
              <p className="font-semibold">Actor Name</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg?height=150&width=150&text=Actor+5" alt="Actor 5" className="w-24 h-24 mx-auto rounded-full object-cover mb-2" />
              <p className="font-semibold">Actor Name</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
        <p className="text-gray-400">&copy; 2024 MovieMax. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MovieStreamingSite;
