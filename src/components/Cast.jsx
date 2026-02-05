const Cast = () => {
    const castMembers = [
        {
            name: "Ranveer Singh",
            role: "The Agent",
            image: "https://placehold.co/400x500/0a0a0a/d4af37?text=Ranveer"
        },
        {
            name: "Sanjay Dutt",
            role: "The Cop",
            image: "https://placehold.co/400x500/0a0a0a/d4af37?text=Sanjay"
        },
        {
            name: "Akshaye Khanna",
            role: "The Villain",
            image: "https://placehold.co/400x500/0a0a0a/d4af37?text=Akshaye"
        },
        {
            name: "R. Madhavan",
            role: "The Handler",
            image: "https://placehold.co/400x500/0a0a0a/d4af37?text=Madhavan"
        }
    ];

    return (
        <section className="bg-black-dh py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-dh/50 to-transparent"></div>

            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="text-gold tracking-[0.3em] uppercase text-sm font-bold mb-3">The Ensemble</p>
                    <h2 className="text-4xl font-normal uppercase text-white sm:text-5xl tracking-widest">Starring</h2>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {castMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#101010] border border-white/10 transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(153,27,27,0.3)]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black-dh via-transparent to-transparent opacity-90"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6 text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-xl font-bold uppercase text-white tracking-wider">{member.name}</h3>
                                    <div className="mt-2 h-0.5 w-0 bg-red-dh mx-auto transition-all duration-500 group-hover:w-12"></div>
                                    <p className="mt-2 text-xs font-medium text-gold uppercase tracking-[0.2em]">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cast;
