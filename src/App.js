import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing components

import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Weather from "./routes/Weather";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/weather" element={<Weather/>}/>
      </Routes>
      
     
      </BrowserRouter>
    </div>
  );
}

export default App;
