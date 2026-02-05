import { Play, Ticket } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background with darker gradient to fix text overlap */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/222222?text=')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black-dh via-black-dh/50 to-black-dh/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-dh/20 via-transparent to-transparent opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-lg font-medium tracking-[0.2em] text-gold sm:text-xl uppercase drop-shadow-md animate-fade-in">
          Directed by Aditya Dhar
        </p>
        <h1 className="mb-6 text-7xl font-normal uppercase tracking-tighter text-white sm:text-9xl drop-shadow-2xl animate-slide-up">
          Dhurandhar
        </h1>
        <p className="mb-10 text-xl font-light tracking-wide text-gray-300 sm:text-2xl max-w-2xl animate-fade-in delay-200">
          <span className="text-red-dh font-bold">Betrayal</span> is the only currency.
        </p>
        
        <div className="flex flex-col gap-6 sm:flex-row animate-fade-in delay-300">
          <button className="group relative flex items-center justify-center gap-3 overflow-hidden border border-gold bg-transparent px-10 py-4 text-lg font-bold text-gold transition-all hover:bg-gold hover:text-black">
            <span className="relative z-10 flex items-center gap-2">
              <Play className="h-5 w-5 fill-current" />
              Watch Trailer
            </span>
          </button>
          <button className="group flex items-center justify-center gap-3 border border-red-dh bg-red-dh px-10 py-4 text-lg font-bold text-white transition-all hover:bg-red-800 hover:border-red-800 hover:shadow-[0_0_20px_rgba(153,27,27,0.5)]">
            <Ticket className="h-5 w-5" />
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
