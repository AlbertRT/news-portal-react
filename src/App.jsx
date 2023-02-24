import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar' 
import Home from './Page/Home/Home'

function App() {
	return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
