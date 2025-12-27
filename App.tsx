import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeTab from './components/HomeTab';
import AboutBento from './components/AboutBento';
import ProjectsSection from './components/ProjectsSection';
import LearningTab from './components/LearningTab';
import ContactTab from './components/ContactTab';
import Footer from './components/Footer';
import TabPanel from './components/TabPanel';

const App: React.FC = () => {
  // Tracks if the initial Nav animation is done
  const [introFinished, setIntroFinished] = useState(false);
  
  // Active Tab State
  const [activeTab, setActiveTab] = useState('home');

  const handleIntroComplete = () => {
    setIntroFinished(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab onTabChange={setActiveTab} />;
      case 'about':
        return <AboutBento />;
      case 'projects':
        return <ProjectsSection />;
      case 'learning':
        return <LearningTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <HomeTab onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-[#2997ff]/30 flex flex-col">
      <Navbar 
        onIntroComplete={handleIntroComplete} 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <main className="flex-grow pt-[52px]"> {/* Offset for fixed navbar */}
        <TabPanel id={activeTab}>
           {renderTabContent()}
        </TabPanel>
      </main>
      
      {introFinished && (
        <div className="animate-fade-in-slow">
           <Footer />
        </div>
      )}
      
      <style>{`
        .animate-fade-in-slow {
          animation: fadeInSlow 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeInSlow {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default App;