import './App.css';
import { Navbar } from './components/Nabvar';
import { MainBanner } from './components/MainBanner';
import { Sidebar } from './components/Sidebar';


function App() {
  return (
    <div className="App">
      
      <header>
        <MainBanner/>
      </header>

      <main>

        <nav>
          <Navbar/>       
        </nav>
        <nav>
          <Sidebar/>       
        </nav>
      </main>     
    </div>
  );
}

export default App;
