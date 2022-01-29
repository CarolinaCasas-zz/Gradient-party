import './App.css';
import EditGradiantBar from './SectionComponents/EditGradiantBar';
import Footer from './SectionComponents/Footer';
import Header from './SectionComponents/Header';
import PrincipalSection from './SectionComponents/InfoSection';
function App() {
  return (
    <div className="App">
      <Header/>
      <EditGradiantBar/>
      <PrincipalSection/>
      <Footer/>
    </div>
  );
}

export default App;
