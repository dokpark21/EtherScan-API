import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import "./App.css";
import Main from "./Pages/main";

function App(){
    return(
        <div>
            <Router>
                <div className="App">
                    <main>
                        <Route path='/' element={Main}/>
                    </main>
                </div>
            </Router>
        </div>
    )
}

export default App;