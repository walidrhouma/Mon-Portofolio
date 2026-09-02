import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ProjectDetail2 from './pages/ProjectDetail2';
import ProjectDetail3 from './pages/ProjectDetail3';
import ProjectDetail4 from './pages/ProjectDetail4';
import ProjectDetail5 from './pages/ProjectDetail5';
import ProjectDetail6 from './pages/ProjectDetail6';
import ProjectDetail7 from './pages/ProjectDetail7';
import ProjectDetail8 from './pages/ProjectDetail8';
import ProjectDetail9 from './pages/ProjectDetail9';
import ProjectDetail10 from './pages/ProjectDetail10';
import ProjectDetail11 from './pages/ProjectDetail11';
import ProjectDetail12 from './pages/ProjectDetail12';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyber-blue selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            
            {/* Routes dédiées pour chaque projet */}
            <Route path="/projets/1" element={<ProjectDetail />} />
            <Route path="/projets/2" element={<ProjectDetail2 />} />
             <Route path="/projets/3" element={<ProjectDetail3 />} />
            <Route path="/projets/4" element={<ProjectDetail4 />} />
            <Route path="/projets/5" element={<ProjectDetail5 />} />
           <Route path="/projets/6" element={<ProjectDetail6 />} />
           <Route path="/projets/7" element={<ProjectDetail7 />} />
           <Route path="/projets/8" element={<ProjectDetail8 />} />
          <Route path="/projets/9" element={<ProjectDetail9 />} />
           <Route path="/projets/10" element={<ProjectDetail10 />} />
           <Route path="/projets/11" element={<ProjectDetail11 />} />
           <Route path="/projets/12" element={<ProjectDetail12 />} />
            {/* Route dynamique générique au cas où */}
            <Route path="/projets/:id" element={<ProjectDetail />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}