import About from './components/About'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About />
      <Portfolio />
      <Skills />
      <Contact /> 

    </main>
  );
}


export default App;
