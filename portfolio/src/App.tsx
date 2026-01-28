import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsKeyboard } from './components/SkillsKeyboard';
import { ProjectsBookStack } from './components/ProjectsBookStack';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#0a0a0f] text-[#e4e4e7]">
      <Toaster 
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: '#14141b',
            border: '1px solid #27272a',
            color: '#e4e4e7',
          },
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsKeyboard />
        <ProjectsBookStack />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
