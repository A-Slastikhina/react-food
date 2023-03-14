import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import {Category} from "./pages/Category";
import { Meal } from "./pages/Meal";
function App() {
  return (
    <div className="App">
     <React.Fragment>
     <Router basename="/react-food">
        <Header/>
        <main className="main-content container">
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/category/:name" element = {<Category/>}/>
              <Route path="/meal/:id" element ={<Meal/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
        <Footer/>
      </Router>
     </React.Fragment>
    </div>
  );
}

export default App;
