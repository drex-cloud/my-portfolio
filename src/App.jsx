import React from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects'; // keep Work 
// included
import Resume from './components/Resume';
import Contact from './components/Contact';
function App() {
  return (
    <div className="min-h-screen bg-lux-bg bg-clinic-bg">
      {/* You can swap backgrounds by changing the class above */}
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Resume /> {/* Added here */}
      <Contact />
    </div>
  );
}

export default App;
