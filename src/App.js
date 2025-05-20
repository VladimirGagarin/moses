import  React from 'react';
import Hero from './components/Hero';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="App">
      <Hero />
      <Navbar exclude={"Home"} />
      <footer>
        <p>&copy; {year} Moses Lakei Lenana. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
