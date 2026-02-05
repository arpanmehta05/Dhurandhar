import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-sm"></div>

            <div className="flex flex-col items-center justify-center space-y-8 relative z-10">
                <h2 className="text-4xl font-normal uppercase tracking-widest text-white/90 drop-shadow-md">Dhurandhar</h2>

                <div className="flex space-x-8">
                    {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                        <a key={i} href="#" className="group relative p-2">
                            <div className="absolute inset-0 rounded-full bg-gold/0 transition-all duration-300 group-hover:bg-gold/10 group-hover:scale-125"></div>
                            <Icon className="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-gold" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col items-center space-y-2 text-sm text-gray-600 font-medium tracking-wide">
                    <p>&copy; 2025 Jio Studios. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-red-dh transition-colors">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-red-dh transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
