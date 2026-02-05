const Plot = () => {
    return (
        <section className="bg-[#101010] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <h2 className="text-5xl font-normal uppercase tracking-tight text-white sm:text-6xl drop-shadow-lg">
                                The Mission
                            </h2>
                            <div className="mt-4 h-1 w-32 bg-gold"></div>
                        </div>

                        <p className="text-xl leading-relaxed text-gray-400 font-light">
                            Set in the dusty underworld of Lyari, Karachi. An Indian intelligence agent
                            <span className="text-gold font-medium"> (Ranveer Singh)</span> infiltrates a powerful crime syndicate to dismantle a terror network.
                            As loyalties blur and the stakes rise, he must navigate a treacherous path where every step could be his last.
                        </p>

                        <p className="text-xl leading-relaxed text-gray-400 font-light border-l-4 border-red-dh pl-6 italic">
                            "Betrayal is the only currency in a war fought in the shadows."
                        </p>
                    </div>

                    {/* Poster Image */}
                    <div className="order-1 lg:order-2 flex justify-center perspective-1000">
                        <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden rounded-sm shadow-[0_0_50px_rgba(212,175,55,0.2)] ring-1 ring-gold/20 transition-transform duration-700 hover:rotate-y-12 hover:scale-105">
                            <img
                                src="https://placehold.co/600x900/000000/d4af37?text=Mission+Poster"
                                alt="Dhurandhar Mission"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black-dh via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plot;
