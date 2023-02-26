import './App.css';
import { Navbar } from './components/Navbar';
import { MainBanner } from './components/MainBanner';
import { Sidebar } from './components/Sidebar';
import { Services } from './components/Services';


function App() {
  return (
    <div className="App">
      
      <header>
        <MainBanner/>
      </header>
     
      <main>

        <nav className='NavbarMenu'>
          <Navbar/>       
        </nav>


          <section className="Services">
            <Services/>
          </section>

        <nav>
          <Sidebar/>       
        </nav>

      </main>   


    </div>
  );
}

export default App;
