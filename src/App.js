/* import { useState } from 'react'; */
import './App.css';
import EditGradiantBar from './SectionPage/EditGradiantBar';
import Footer from './SectionPage/Footer';
import Header from './SectionPage/Header';
import InfoSection from './SectionPage/InfoSection';
import ThemeProvider from './context/ThemeProvider';


function App() {


  return (

    <ThemeProvider>
      <div className="App">
        <Header />
        <EditGradiantBar />
        <InfoSection />
        <Footer />
      </div>
    </ThemeProvider>


  );
}

export default App;
