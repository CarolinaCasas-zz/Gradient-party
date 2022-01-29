import './App.css';
import EditGradiantBar from './SectionPage/EditGradiantBar';
import Footer from './SectionPage/Footer';
import Header from './SectionPage/Header';
import InfoSection from './SectionPage/InfoSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <EditGradiantBar/>
      <InfoSection/>
      <Footer/>
    </div>
  );
}

export default App;
