import './App.css';
import Code from './Components/Code/Code'
import Setup from './Components/Setup/Setup'
import {Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx';
import CloudServices from './Components/Services/CloudServices';
function App() {
  return (
    <div className="App">
    
    <Navbar/>

    <Routes>
      <Route path="/Services" element={<CloudServices/>}/>
      <Route path="/Setup" element={<Setup/>}/>
      <Route path="/Code" element={<Code/>}/>
    </Routes>

</div>
  );
}

export default App;
