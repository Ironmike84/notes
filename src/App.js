import './App.css';
import {Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx';
import CloudServices from './Components/Services/CloudServices';
function App() {
  return (
    <div className="App">
    
    <Navbar/>

    <Routes>
      <Route path="/Services" element={<CloudServices/>}/>
    </Routes>

</div>
  );
}

export default App;
