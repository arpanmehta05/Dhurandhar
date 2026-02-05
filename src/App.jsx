import Hero from './components/Hero';
import Plot from './components/Plot';
import Cast from './components/Cast';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#fbbf24] selection:text-black">
      <Hero />
      <Plot />
      <Cast />
      <Footer />
    </div>
  );
}

export default App;
