import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import VoiceOver from './components/VoiceOver';
import VideoEditing from './components/VideoEditing';
import Collaborations from './components/Collaborations';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <VoiceOver />
      <VideoEditing />
      <Collaborations />
      <Contact />
    </div>
  );
}

export default App;