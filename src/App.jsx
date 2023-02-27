import './App.css';
import { Navbar } from './components/Navbar';
import { MainBanner } from './components/MainBanner';
import { Sidebar } from './components/Sidebar';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import Divider from '@mui/material/Divider';


function App() {
  return (
    <div className="App">      
     
      <main>

        <nav className='NavbarMenu'>
          <Navbar/>       
        </nav>
        
        <div className="Container">

          <header>
            <MainBanner/>
          </header>       
          <Divider/>
          <section className="Services">
            <Services/>
          </section>         

          <Footer/>

        </div>

        <nav>
          <Sidebar/>       
        </nav>

      </main> 
    </div>
  );
}

export default App;
